const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove",function(e){

    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    /*cursorOutline.style.left = `${posX}px`;
    cursorOutline.style.top = `${posY}px`;*/

    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, {duration: 500, fill:"forwards"});
});


    const sendMail = () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const contactNo = document.getElementById('contactNo').value;
    const message = document.getElementById('message').value;
    window.open(`https://mail.google.com/mail/u/0/?view=cm&ui=2&tf=0&fs=1&to=forlearneiei@gmail.com&su=เมลล์จากคุณ${name+' '+email}&body=${message}`);
}