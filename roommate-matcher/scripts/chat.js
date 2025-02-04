function sendMessage() {
    let message = document.getElementById("messageInput").value;
    let chatBox = document.querySelector(".chat-box");
    chatBox.innerHTML += `<p>${message}</p>`;
    document.getElementById("messageInput").value = "";
}
