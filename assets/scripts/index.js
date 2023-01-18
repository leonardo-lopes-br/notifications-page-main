document.getElementById('read-messages').addEventListener('click', () => {
    const notificationsUnread = document.getElementsByClassName('unread');
    if (notificationsUnread.length > 0) {
        // Mark all notifications as read
        Array.from(notificationsUnread).forEach((notification) => {
            notification.classList.replace('unread', 'read');
        })
        // Turns the amount of unread notifications to zero
        document.getElementById('header-number').innerHTML = 0;
    }
})
