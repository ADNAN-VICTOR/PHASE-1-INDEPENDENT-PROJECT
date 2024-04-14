document.addEventListener("DOMContentLoaded", function() {
    // Function to refresh the page
    function refreshPage() {
        location.reload();
    }

    // Function to display members in the content div
    function displayMembers(membersData, sport = null) {
        const contentDiv = document.getElementById('content');
        contentDiv.innerHTML = ''; // Clear previous content

        // Filtering members based on sport played
        let filteredMembers = membersData;
        if (sport) {
            filteredMembers = filteredMembers.filter(member => member.Sport === sport);
        }

        // this where we display members in the content div
        filteredMembers.forEach(member => {
            const memberDiv = document.createElement('div');
            memberDiv.textContent = `Name: ${member["First Name"]} ${member["Last Name"]}, Sport: ${member.Sport}, Fee Balance: ${member["Fee Balance"]}`;
         //if a member has a fee balance remaining they are diplayed as red
            if (member["Fee Balance"] > 0) {
                memberDiv.style.color = 'red'; 
            }
            contentDiv.appendChild(memberDiv);
        });
    }

    //These are the event listeners for each link/anchor

    const homeLink = document.getElementById('homeLink');
    //when home is clicked it refreshes the page
    if (homeLink) {
        homeLink.addEventListener('click', refreshPage);
    }

    const viewAllMembers = document.getElementById('viewAllMembers');
    //when view members is clicked it will display all members of the club
    if (viewAllMembers) {
        viewAllMembers.addEventListener('click', function() {
            fetch('http://localhost:3000/members')
                .then(response => response.json())
                .then(data => displayMembers(data));
        });
    }
    //when view basketball members is clicked it will display all members of the basketball club
    const viewBasketBallMembers = document.getElementById('viewBasketBallMembers');
    if (viewBasketBallMembers) {
        viewBasketBallMembers.addEventListener('click', function() {
            fetch('http://localhost:3000/members')
                .then(response => response.json())
                .then(data => displayMembers(data, 'BasketBall'));
        });
    }
// the rest do the same but for their respective sports
    const viewVolleyBallMembers = document.getElementById('viewVolleyBallMembers');
    if (viewVolleyBallMembers) {
        viewVolleyBallMembers.addEventListener('click', function() {
            fetch('http://localhost:3000/members')
                .then(response => response.json())
                .then(data => displayMembers(data, 'Volleyball'));
        });
    }

    const viewFootballMembers = document.getElementById('viewFootballMembers');
    if (viewFootballMembers) {
        viewFootballMembers.addEventListener('click', function() {
            fetch('http://localhost:3000/members')
                .then(response => response.json())
                .then(data => displayMembers(data, 'Football'));
        });
    }

    const viewSwimmingMembers = document.getElementById('viewSwimmingMembers');
    if (viewSwimmingMembers) {
        viewSwimmingMembers.addEventListener('click', function() {
            fetch('http://localhost:3000/members')
                .then(response => response.json())
                .then(data => displayMembers(data, 'Swimming'));
        });
    }
});
