        function addEvent() {
            const name = document.getElementById('evName').value;
            const date = document.getElementById('evDate').value;
            const cat = document.getElementById('evCat').value;
            const desc = document.getElementById('evDesc').value;

            if(!name || !date) return alert("Please fill in Name and Date");

            const grid = document.getElementById('eventGrid');
            const card = document.createElement('div');
            card.className = 'event-card';
            
            card.innerHTML = `
                <button class="close-btn" onclick="this.parentElement.remove()">×</button>
                <h3>${name}</h3>
                <span class="date">📅 ${date}</span>
                <div class="category-tag">${cat}</div>
                <p>${desc}</p>
            `;

            grid.appendChild(card);
            
            // Clear inputs
            document.getElementById('evName').value = '';
            document.getElementById('evDesc').value = '';
        }