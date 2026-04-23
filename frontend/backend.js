const API_URL = "http://localhost:5000/data";

async function fetchBackendData() {
try {
const res = await fetch(API_URL);
const data = await res.json();

```
    console.log("✅ Backend Data:", data);

    if (!data || data.length === 0) return;

    // 🔹 Update AI explanation
    const aiText = document.getElementById("aiExplBody");
    if (aiText) {
        aiText.innerHTML = `
            Market sentiment from live data:
            <strong class="green">${data[0].text || "No data"}</strong>
        `;
    }

    // 🔹 Update feed (optional)
    const feedList = document.getElementById("feedList");
    if (feedList) {
        feedList.innerHTML = "";

        data.slice(0, 5).forEach(item => {
            const div = document.createElement("div");
            div.className = "feed-item";

            div.innerHTML = `
                <span class="feed-icon green">↗</span>
                <div class="feed-body">
                    <div class="feed-text">${item.text || "No data"}</div>
                    <div class="feed-time">Live</div>
                </div>
            `;

            feedList.appendChild(div);
        });
    }

} catch (err) {
    console.error("❌ Backend Error:", err);
}
```

}

// run every 5 sec
document.addEventListener("DOMContentLoaded", () => {
fetchBackendData();
setInterval(fetchBackendData, 5000);
});
