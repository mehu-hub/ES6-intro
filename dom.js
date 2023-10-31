document.getElementById('apply-bg').addEventListener('click', function(){
    const friends = document.getElementsByClassName('friend')
    for(friend of friends){
        friend.style.color = 'white'
        friend.style.padding = '5px'
        friend.style.marginTop = '5px'
        friend.style.backgroundColor = 'orange'
        
    }
});

//----------------------------------------------------------------------------

document.getElementById('center-third').addEventListener('click', function(){
     const third = document.getElementById('third');
     third.style.textAlign = 'center';
})

//----------------------------------------------------------------------------

document.getElementById('add-friend').addEventListener('click', function(){  

    const friendContainer = document.getElementById('friends');
    const friend = document.createElement('div');
    friend.classList.add('friend');

    friend.innerHTML = `
    <h3 class='friend-name'>Something New Added</h3>
    <p>Added Something</p>
    `
    friendContainer.appendChild(friend);
     
})