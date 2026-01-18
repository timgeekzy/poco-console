const API_BASE_URL = "genevie-unswallowable-moriah.ngrok-free.dev"; // Your GC URL

export async function pocoFetch(endpoint, method = 'GET', body = null) {
    const tg = window.Telegram.WebApp;
    const headers = {
        'Content-Type': 'application/json',
        'X-Telegram-Init-Data': tg.initData // For security validation
    };

    const config = {
        method,
        headers,
        ...(body && { body: JSON.stringify(body) })
    };

    const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
    return response.json();
}