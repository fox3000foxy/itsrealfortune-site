function submitForm() {
    // on contact form sent, webhook to https://discord.com/api/webhooks/1344605915768426547/MMkn_sTOhNC4Te4CgShEKIXaxFoJ_m6y51BsG8a2E23g-S1gqyC_MxYtI8XYnpun30dz
    document.querySelector('#collaboration-form').addEventListener('submit', function(e) {
        e.preventDefault();
        fetch('https://discord.com/api/webhooks/1344605915768426547/MMkn_sTOhNC4Te4CgShEKIXaxFoJ_m6y51BsG8a2E23g-S1gqyC_MxYtI8XYnpun30dz', {
            method: 'POST',
            body: JSON.stringify({
                content: `
                Nom: ${document.querySelector('input[name="name"]').value}
                Email: ${document.querySelector('input[name="email"]').value}
                Sujet: ${document.querySelector('select[name="project-type"]').value}
                Message: ${document.querySelector('textarea[name="message"]').value}
                `
            })
        });

        // clear form
        document.querySelector('form').reset();
        return false;
    });
}

// prevent context menu on <img>
document.addEventListener('contextmenu', function(e) {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
    }
});