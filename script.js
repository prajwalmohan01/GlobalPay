function showToast(message) {
    const toast = document.getElementById("toast");
    toast.innerText = message;
    toast.classList.remove("hidden");
    toast.classList.add("opacity-100");
    setTimeout(() => {
        toast.classList.add("hidden");
    }, 3000);
}
function handleCopy() {
    const upi = document.getElementById("upiID").innerText;
    navigator.clipboard.writeText(upi);
    showToast("UPI ID copied!");
}
function handleDownload() {
    showToast("Wait");
    setTimeout(() => {
        const link = document.createElement("a");
        link.href = "assets/downloadQR.png";
        link.download = "qr";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        showToast("Downloaing.....");
    }, 3000);
}

function handleDownloadd() {
    showToast("Wait");
    setTimeout(() => {
        const link = document.createElement("a");
        link.href = "assets/airtmm.png";
        link.download = "qr";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        showToast("Downloaing.....");
    }, 3000);
}

function handleDownloaddd() {
    showToast("Wait");
    setTimeout(() => {
        const link = document.createElement("a");
        link.href = "assets/paypal.png";
        link.download = "qr";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        showToast("Downloaing.....");
    }, 3000);
}

function handlePay() {
    showToast("Opening UPI app(s)");
    setTimeout(() => {
        window.location.href = "upi://pay?pa=socialhelpline@upi&pn=Prajwal&cu=INR"; // Replace upi id and name keep the format same
    }, 3000);
}

function handlePayy() {
    showToast("Opening Airtm App");
    setTimeout(() => {
        window.location.href = "https://airtm.me/prajwal7ooevvzs"; // Replace upi id and name keep the format same
    }, 3000);
}

function handlePayyy() {
    showToast("Opening Airtm App");
    setTimeout(() => {
        window.location.href = "https://www.paypal.me/prajwalmohan04"; // Replace upi id and name keep the format same
    }, 3000);
}

const paymentAddresses = {
    paypal: '/paypal.html', // Update Paypal value
    binance: '926220173', // Update Binance Pay value
    coffee: '/airtm.html' // Update airtm payment
};

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('paypal-address').textContent = paymentAddresses.paypal;
    document.getElementById('binance-address').textContent = paymentAddresses.binance;
    document.getElementById('coffee-address').textContent = paymentAddresses.coffee;
});
function showToast(message) {
    const toast = document.getElementById("toast");
    toast.innerText = message;
    toast.classList.remove("hidden");
    toast.classList.add("opacity-100");
    setTimeout(() => {
        toast.classList.add("hidden");
    }, 3000);
}

function copyPaymentAddress(method) {
    const address = paymentAddresses[method];
    if (!address) return;
    if (method === 'paypal' || method === 'coffee') {
        window.location.href = address;
        return;
    }
    if (method === 'binance') {
        navigator.clipboard.writeText(address);
        showToast(`${method.charAt(0).toUpperCase() + method.slice(1)} copied!`);
    }
}
