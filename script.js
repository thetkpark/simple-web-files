const openPromptBtn = document.getElementById('open-prompt')
    let name = ''

    openPromptBtn.addEventListener('click' ,() => {
      name = prompt('What\'s your name?', '')
      showGreeting()
    })

    function showGreeting() {
      const greetingMsg = document.getElementById('greeting-message')

      greetingMsg.textContent = 'Oh! Hi, ' + name + '. Nice to meet you 😉'
    }