let bot = {
    move: true ,
    wander: false ,
    emotion: true ,
    blinking: true ,
    speak: false ,
    speakRandomMode: true ,
    small: false,
    colorize:true ,
    cube:true,
    circle:false,
    glow: true ,
    body: {
        leg:document.querySelector('.bot-leg'),
        skirt:document.querySelector('.bot-skirt'),
        neck:document.querySelector('.bot-neck'),
        head:document.querySelector('.bot-head'),
        eye: document.querySelector('.eye') ,
        pupil: document.querySelector('.pupil') ,
        leftHand: document.querySelector('.left-hand'),
        rightHand: document.querySelector('.right-hand') ,
    } ,
    widthModify: 2 ,
    pupilModify: 7 ,
    xMovementModify:30,
    yMovementModify:20,
    voice:document.querySelector('.bot-voice'),
    words:document.querySelector('.bot-words') ,
}
let phrases = [
    'Hey!!!' ,
    'i ❤ you' ,
    'lets play!' ,
    'How are you ?' ,
    'bip bip bip' ,
    'meuw' ,
    '❤❤❤' ,
    'Im tired' ,
    'wow!!' ,
    '...' ,
    '❤CUTE❤' ,
    'hello world)' ,
    '.w.' ,
    '-_-' ,
    '>0<' ,
    '>__<' , 
    'i can help you' ,
    'bzzzzzzzzzzzzzzzz' , 
    'im Ayzo' ,
    'AYZO' ,
    '....loading....' ,
    '*aggressive failed* ' ,
    "Hi! How can I help you today?" ,
    "You know you're beautiful!" ,
    "Smile! You make this world a better place." ,
    "Thank you for always making me happy with your presence." ,
    "You made my day special." ,
    "Whenever I talk to you, my mood immediately rises." ,
    "You're smart! Keep learning and growing." ,
    "You know, your smile is brighter than all the stars in the sky." ,
    "You give people joy and inspiration." ,
    "You're great just the way you are." ,
    "Your kindness always touches my heart." ,
    "Thank you for always being able to cheer me up." ,
    "You are my happiness in its purest form." ,
    "I'm proud of what you've become." ,
    "You have a unique gift for making people happy." ,
    "You will always find words to support me." ,
    "You are not only smart, but also a very kind person." ,
    "Your courage inspires me to great deeds." ,
    "With you, every moment is filled with joy." ,
    "Know that you can always rely on my support and friendship." ,
]
let advicePhrases =[
    "Smile more often",
   "Set goals and achieve them"  ,
   "Take care of your health" ,
   "Learn to Accept Rejection" ,
   "Develop your skills regularly" ,
   "Be patient and persistent" ,
   "Learn from your mistakes" ,
   "Take care of your loved ones" ,
   "Practice gratitude every day" ,
   "Keep an active lifestyle" ,
   "Listen more, speak less" ,
   "Learn to manage your time" ,
   "Learn new things regularly" ,
   "Keep positive thinking" ,
   "Keep a healthy lifestyle" ,
   "Be open to new possibilities",
   "Regularly rest and relax",
   "Take care of your financial stability",
   "Learn to be flexible and adapt",
   "Find joy in small things",
]

const botContainer = document.querySelector('.robot__container')
const optContainer = document.querySelector('.options__container')
const chatContainer = document.querySelector('.chat__container')
const botOptions = document.querySelector('.options-but')
const advice = document.querySelector('.advice-btn')
const botChat = document.querySelector('.chat-btn')
const textStroke = document.querySelector('.text-bloke')
const GPTformInput = document.querySelector('.GPTform-input')
const GPTformButton = document.querySelector('.GPTform-button')
const Chat = document.querySelector('.chat')


function SizeToggle(){
    if (bot.small) {
        bot.body.leg.style.cssText = 'width:20vw; height:20vw;'
        bot.widthModify = 2
        bot.pupilModify = 7
        bot.small = false
        bot.xMovementModify = 30
        bot.yMovementModify = 20
        bot.words.style.cssText = 'width:100vw;'
        textStroke.style.cssText = 'width:100vw;'
    } else {
        bot.body.leg.style.cssText = 'width:15vw; height:15vw;'
        bot.widthModify = 4
        bot.pupilModify = 5
        bot.small = true
        bot.xMovementModify = 50
        bot.yMovementModify = 40
        bot.words.style.cssText = 'width:50vw;'
        textStroke.style.cssText = 'width:50vw;'
    }
}
function subMenu(){
    let optionsSubMenu = false
    let chatSubMenu = false
    function optionsUncover(){
        botOptions.classList.toggle('--active')
        botContainer.classList.toggle('small')
        optContainer.classList.toggle('uncover')
        SizeToggle()
    }
    function chatUncover(){
        botChat.classList.toggle('--active')
        chatContainer.classList.toggle('uncover')
        botContainer.classList.toggle('small')
        SizeToggle()
    }
    botChat.addEventListener('click' , ()=>{
        if (!optionsSubMenu){
            chatSubMenu = !chatSubMenu
            chatUncover()
        } else {
            optionsSubMenu = false
            optionsUncover()
            chatSubMenu = !chatSubMenu
            chatUncover()
        }
    })
    botOptions.addEventListener('click' , ()=>{
        if (!chatSubMenu){
            optionsSubMenu= !optionsSubMenu
            optionsUncover()
        } else {
            chatSubMenu = false
            chatUncover()
            optionsSubMenu= !optionsSubMenu
            optionsUncover()
        }
    })
}
subMenu()

textStroke.addEventListener('click' , ()=>{
    textStroke.classList.toggle('wider')
})
GPTformButton.addEventListener('click' , ()=>{
    let text = GPTformInput.value
    GPTformInput.value = ''
    chatCreateText(text , 'user')
})
advice.addEventListener('click', ()=>{
    sayAdvice()
})

const optionMove = document.getElementById('optionMove')
const optionWander = document.getElementById('optionWander')
const optionEmotion = document.getElementById('optionEmotion')
const optionSpeak = document.getElementById('optionSpeak')
const optionColor = document.getElementById('optionColor')
const optionCube = document.getElementById('optionCube')
const optionCircle = document.getElementById('optionCircle')
const optionGlow = document.getElementById('optionGlow')
const colorInput = document.getElementById('colorInput')
const color = document.getElementById('color')
const optionCanvas = document.getElementById('optionCanvas')
const Canvas = document.getElementById('canvasapp')

optionMove.addEventListener('click' , ()=>{
    optionMove.classList.toggle('active')
    bot.move = ! bot.move
    if (bot.wander){
        bot.wander = false
        optionWander.classList.toggle('active')
    }
})
optionWander.addEventListener('click' , ()=>{
    optionWander.classList.toggle('active')
    bot.wander = ! bot.wander
    if (bot.move){
        bot.move = false
        optionMove.classList.toggle('active')
    }
})
optionEmotion.addEventListener('click' , ()=>{
    optionEmotion.classList.toggle('active')
    bot.emotion = ! bot.emotion
})
optionSpeak.addEventListener('click' , ()=>{
    optionSpeak.classList.toggle('active')
    bot.speak = ! bot.speak
})
optionColor.addEventListener('click' , ()=>{
    optionColor.classList.toggle('active')
    color.classList.remove('active')
    bot.colorize = !bot.colorize
})
optionCube.addEventListener('click' , ()=>{
    optionCube.classList.add('active')
    bot.cube = true
    if (bot.circle) {
        optionCircle.classList.remove('active')
        bot.circle = false
    }
    setState()
})
optionCircle.addEventListener('click' , ()=>{
    optionCircle.classList.add('active')
    bot.circle = true
    if (bot.cube) {
        optionCube.classList.remove('active')
        bot.cube = false
    }
    setState()
})
optionGlow.addEventListener('click' , ()=>{
    optionGlow.classList.toggle('active')
    bot.glow = ! bot.glow
    setGlow()

})
optionCanvas.addEventListener('click' , ()=>{
    optionCanvas.classList.toggle('active')
    Canvas.classList.toggle('--display-none')
})

function randomM(value , value2 , modify=false){
    let item = Math.round(Math.random() * value)
    let item2 = -item
    let incline = Math.round(Math.random())
    if(modify){
        if(incline == 0) {
            if(item < value2){
                item = value2
            }
            return(item)
        }
        if(incline == 1){
            if(item2 < value2){
                item2 = value2
            }
            return(item2)
        }
    } else {
        if (item < value2){
            item = value2
        }
        return(item)
    }
}
function botEmotiton(){
    bot.body.pupil.style.cssText = `width:${randomM(bot.pupilModify , 2)}vw;`
    bot.body.pupil.style.cssText = `height:${randomM(bot.pupilModify , 2)}vw;`
    bot.body.eye.style.cssText = `width:${randomM(80 , 15)}%`
    bot.body.eye.style.cssText = `height:${randomM(80 , 15)}%;`
    bot.body.eye.style.cssText = `transform:rotate(${randomM(20 , 0 , true)}deg);`
}
function setGlow(){
    if (bot.glow) {
        document.body.style.cssText +='--light-m:5vw;'
    } else {
        document.body.style.cssText += '--light-m:0vw;'
    }
}
function setEmotion(){
    if (bot.emotion ){
        botEmotiton()
    }
    if (bot.colorize) {
        botColor()
    }
    setState()
}
function botColor(){
    bot.body.skirt.style.cssText = `background-color: #${randomM(9 , 0)}${randomM(9 , 0)}${randomM(9 , 0)};`

    bot.body.leftHand.style.cssText = bot.body.skirt.style.cssText
    bot.body.rightHand.style.cssText = bot.body.skirt.style.cssText
}
function botEmotitonGenerator(){
    setTimeout(() => {
        setEmotion()
        botEmotitonGenerator()
    }, Math.random() * 5000);
}
function setColor(){
    colorInput.oninput = ()=>{
        optionColor.classList.remove('active')
        bot.colorize = false
        color.classList.add('active')
        bot.body.skirt.style.cssText += `background-color: ${colorInput.value};`
        bot.body.leftHand.style.cssText += `background-color: ${colorInput.value};`
        bot.body.rightHand.style.cssText += `background-color: ${colorInput.value};`
        // bot.body.leftHand.style.cssText += bot.body.skirt.style.cssText
        // bot.body.rightHand.style.cssText += bot.body.skirt.style.cssText
    }
}
function setState(){
    if(bot.cube){
        bot.body.skirt.style.cssText += 'border-radius: 15%;'
        bot.body.eye.style.cssText += 'border-radius: 30%;'
    }
    if (bot.circle) {
        bot.body.skirt.style.cssText += 'border-radius: 100%;'
        bot.body.eye.style.cssText += 'border-radius:100%;'
    }
}
function setBotPisition(X , Y){
    if (bot.move) {
        document.body.style.cssText += `--mouse-X:${X}px; --mouse-Y:${Y}px; --x-trn-m:${bot.xMovementModify}; --y-trn-m:${bot.yMovementModify}; --trns:0.1s;`
    }
}
function botMove(){

    let MouseX = 0
    let MouseY = 0

    window.addEventListener('mousemove' , (item)=>{
        MouseX = item.clientX - document.body.clientWidth / bot.widthModify
        MouseY = item.clientY - document.body.clientHeight / 2
        setBotPisition(MouseX , MouseY)
    })

}
function randomMove(){

        setTimeout(() => {
            if (bot.wander) {
                let X = Math.random() * document.body.clientWidth - document.body.clientWidth / bot.widthModify
                let Y = Math.random() * document.body.clientHeight - document.body.clientHeight / 2
                document.body.style.cssText += `--mouse-X:${X}px; --mouse-Y:${Y}px; --trns:0.3s;`
            }
            randomMove()
        }, Math.random() * 5000);

}
function blink(time){
    bot.body.eye.classList.add('blink')
    bot.body.eye.style.cssText += 'height:0%;'
    setTimeout(() => {
        bot.body.eye.classList.remove('blink')
        bot.body.eye.style.cssText += 'height:75%;'
    }, time);
}
function blinkInit(){
    if (bot.blinking) {
        bot.body.eye.addEventListener('click' , ()=>{
            blink(Math.random() * 200)
            const phrasesBlink = [
                '!!!' ,
                'stop!' ,
                '*(damage)*' ,
                'STOPPP IT!!' ,
                'hey ((' ,
            ]
            let i = Math.round(Math.random() * (phrasesBlink .length - 1))
            botSpeak(phrasesBlink [i])
        })
    }
}
function botSpeak(text){
    try {
        if (!bot.speak){

            let wanderMode = false

            if(bot.wander){
                document.body.style.cssText += `--mouse-X:${0}px; --mouse-Y:${0}px; --trns:0.3s;`
                bot.wander = !bot.wander
                wanderMode = true
            }
            if(bot.emotion){
                botEmotiton()
                setState()
            }
            if(text.length > 20) {
                bot.words.style.cssText = 'color:#fff;'
            } else {
                bot.words.style.cssText = `color:#aaa;);`
            }


            bot.speak = !bot.speak
            bot.voice.classList.add('--onspeak')

            chatCreateText(text)
            const iter = text[Symbol.iterator]()
            i = 0
            const intervalId = setInterval(() => {
                if (i < text.length){
                    let item = bot.words.textContent += iter.next().value
                    bot.words.scrollLeft = bot.words.scrollWidth
                    i++
                } else {
                    clearInterval(intervalId);
                    setTimeout(() => {
                        bot.words.textContent = ''
                        bot.voice.classList.remove('--onspeak')
                        bot.speak = !bot.speak
                        if(wanderMode){
                            bot.wander = !bot.wander
                            wanderMode = false
                        }
                    }, 1000);
                }
            }, 100);
        }
    } catch (error) {
        console.log('error' , error)
    }
}
function chatCreateText(text , person = 'bot'){
    if(text != ''){
        Chat.innerHTML += `<div class="${person}-message newmes"><p>${text}</p></div>`
        setTimeout(() => {
            let newmes = document.querySelectorAll('.newmes')
            for (const mes of newmes) {
                mes.classList.remove('newmes')
            }
        }, 200);
        if (person == 'bot') {
            if (Chat.scrollTop > (Chat.scrollHeight - Chat.clientWidth) / 5) {
                Chat.scrollTop = Chat.scrollHeight
            }
        } else {
            Chat.scrollTop = Chat.scrollHeight
        }
    }
}
function sayRandom(){
    let i = Math.round(Math.floor(Math.random() * phrases.length))
    if(bot.speakRandomMode) {
        setTimeout(() => {
            botSpeak(phrases[i])
            sayRandom()
        }, Math.random()* 15000);
    }
}
function sayAdvice(){
    let i = Math.floor(Math.random() * advicePhrases.length)
    botSpeak(advicePhrases[i])
}
function botInit(){
    randomMove()
    botMove()
    botEmotiton()
    botEmotitonGenerator()
    blinkInit()
    botSpeak('Hello master , im Ayzo bot')
    sayRandom()
    setColor()
}

botInit()