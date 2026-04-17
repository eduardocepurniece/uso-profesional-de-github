const $ = (selector) => document.querySelector(selector)

const form = $('#transaction-form')
const incomeEl = $('#income')
const expenseEl = $('#expense')
const balanceEl = $('#balance')
const transactionsList = $('#transaction-list')
const errorEl = $('#form-error')
const amountInput = $('#amount')
const typeInput = $('#type')
const descriptionInput = $('#description')

let transactions = JSON.parse(localStorage.getItem('transactions')) || []

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
	renderTransactions()
	updateSummary()
})

if (transactionsList) {
	transactionsList.addEventListener('click', (event) => {
		const button = event.target.closest('[data-action="delete"]')
		if (!button) {
			return
		}

		const id = Number(button.dataset.id)
		if (!Number.isFinite(id)) {
			return
		}

		deleteTransaction(id)
	})
}

form.addEventListener('submit', (e) => {
	e.preventDefault()
	clearError()
	const type = typeInput.value
	const description = descriptionInput.value.trim()
	const amount = parseFloat(amountInput.value)

	if (!description) {
		showError('Por favor, ingresa una descripcion.')
		descriptionInput.focus()
		return
	}

	if (!['Ingreso', 'Gasto'].includes(type)) {
		showError('Por favor, selecciona un tipo valido.')
		typeInput.focus()
		return
	}

	if (Number.isNaN(amount) || amount <= 0) {
		showError('Por favor, ingresa un monto valido.')
		amountInput.focus()
		return
	}

	const transaction = {
		id: Date.now(),
		type,
		description,
		amount,
		date: new Date().toLocaleDateString(),
	}

	transactions.unshift(transaction)
	saveTransactions()
	updateSummary()
	renderTransactions()
	form.reset()
	typeInput.value = ''
	amountInput.focus()
})

function updateSummary() {
	const income = transactions
		.filter((t) => t.type === 'Ingreso')
		.reduce((sum, t) => sum + t.amount, 0)

	const expense = transactions
		.filter((t) => t.type === 'Gasto')
		.reduce((sum, t) => sum + t.amount, 0)

	const balance = income - expense

	if (incomeEl) {
		incomeEl.textContent = formatCurrency(income)
	}

	if (expenseEl) {
		expenseEl.textContent = formatCurrency(expense)
	}

	if (balanceEl) {
		balanceEl.textContent = formatCurrency(balance)
		balanceEl.classList.toggle('balance-negative', balance < 0)
		balanceEl.classList.toggle('balance-positive', balance >= 0)
	}
}

function renderTransactions() {
	if (!transactionsList) {
		return
	}

	transactionsList.innerHTML = ''
	if (transactions.length === 0) {
		const emptyState = document.createElement('li')
		emptyState.className = 'transaction-empty'
		emptyState.textContent = 'No hay transacciones aun.'
		transactionsList.appendChild(emptyState)
		return
	}

	transactions.forEach((t) => {
		const li = document.createElement('li')
		const itemClass =
			t.type === 'Ingreso' ? 'transaction-item--income' : 'transaction-item--expense'
		const amountClass =
			t.type === 'Ingreso' ? 'transaction-amount--income' : 'transaction-amount--expense'
		const sign = t.type === 'Ingreso' ? '+' : '-'
		li.className = `transaction-item ${itemClass}`
		li.innerHTML = `
			<div class="transaction-meta">
				<span class="transaction-type">${t.type}</span>
				<span class="transaction-desc">${t.description}</span>
				<span class="transaction-date">${t.date}</span>
			</div>
			<div class="transaction-actions">
				<span class="transaction-amount ${amountClass}">
					${sign}${formatCurrency(t.amount)}
				</span>
				<button
					type="button"
					class="transaction-delete"
					data-action="delete"
					data-id="${t.id}"
					aria-label="Eliminar transaccion"
				>
					×
				</button>
			</div>
		`
		transactionsList.appendChild(li)
	})
}

function deleteTransaction(id) {
	transactions = transactions.filter((t) => t.id !== id)
	saveTransactions()
	updateSummary()
	renderTransactions()
}

function saveTransactions() {
	localStorage.setItem('transactions', JSON.stringify(transactions))
}

function formatCurrency(value) {
	const sign = value < 0 ? '-' : ''
	return `${sign}$${Math.abs(value).toFixed(2)}`
}

function showError(message) {
	if (!errorEl) {
		alert(message)
		return
	}

	errorEl.textContent = message
}

function clearError() {
	if (!errorEl) {
		return
	}

	errorEl.textContent = ''
}
