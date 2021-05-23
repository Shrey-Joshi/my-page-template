/**
 * This is the client side script. 
 * This sends the plaintext address to server.
 * This renders the returned data
 */

console.log('Client side javascript file is loaded!')

const inputForm = document.querySelector('form')
const searchElement = document.querySelector('input')

const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const messageThree = document.querySelector('#message-3')
const messageFour = document.querySelector('#message-4')
const messageFive = document.querySelector('#message-5')
const messageSix = document.querySelector('#message-6')

weatherForm.addEventListener('submit', e => {
    e.preventDefault()

    const location = searchElement.value

    messageOne.textContent = "Loading..."
    messageTwo.textContent = ""
    messageThree.textContent = ""
    messageFour.textContent = ""
    messageFive.textContent = ""
    messageSix.textContent = ""

    fetch(`/main?${new URLSearchParams({address: location})}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = 'There was an error!'

                if(confirm("There was an error! \nWould you like to see the detailed error?")){
                    alert(data.error)
                }

                console.log(data.error)

            } else {

                messageOne.textContent = data.data_item_one
                messageTwo.textContent = data.data_item_two
                messageThree.textContent = data.data_item_three
                messageFour.textContent = data.data_item_four
                messageFive.textContent = data.data_item_five
                messageSix.textContent = data.data_item_six

                console.log(data.data_item_one)
                console.log(data.data_item_two)
                console.log(data.data_item_three)
                console.log(data.data_item_four)
                console.log(data.data_item_five)
                console.log(data.data_item_six)
            }
        })
    })
})