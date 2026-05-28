// ============================================
// TIRINYA CAMPSITE - CHAT BOT (KIBO)
// ============================================

const chatMessages = document.getElementById('chatMessages');
const chatForm = document.getElementById('chatForm');
const chatInput = document.getElementById('chatInput');

// Bot responses database
const botResponses = {
    rates: {
        keywords: ['rate', 'price', 'cost', 'accommodation', 'availability', 'how much', 'expensive'],
        response: `At the moment, we do not have accommodation available at Tirinya Campsite. We are currently focusing on day activities, guided experiences, and event bookings while our guest lodging is being updated.

Please check back soon or ask about the experiences we do offer today.`,
        suggestions: ['What activities can we do nearby?', 'Where are you located?']
    },
    location: {
        keywords: ['location', 'where', 'direction', 'drive', 'address', 'how to get'],
        response: `Tirinya Campsite is located in <strong>Elgeiyo Marakwet County</strong>, near Iten View Point. You will find us within easy reach of the county roads that lead to the scenic lookout.

This is an ideal base for exploring the highland trails, the Kerio Valley views, and the surrounding wilderness.`,
        suggestions: ['What activities can we do nearby?', 'Do you have accommodation?']
    },
    dining: {
        keywords: ['restaurant', 'dining', 'food', 'bar', 'eat', 'meal', 'lunch', 'dinner'],
        response: `We do not have the Acacia Dining Area or beers available at Tirinya Campsite. At this time, we only offer a selection of soft drinks for guests.

Please let us know if you would like recommendations for nearby dining options or if you would like to hear about our available activities.`,
        suggestions: ['What activities can we do nearby?', 'Where are you located?']
    },
    activities: {
        keywords: ['activity', 'activities', 'do nearby', 'experience', 'adventure', 'things to do'],
        response: `At Tirinya Campsite, our guests enjoy a wide range of outdoor experiences, including:

• <strong>Hiking and Trail Walking</strong>
• <strong>Field Sports</strong>
• <strong>Nature Trail Walk</strong>
• <strong>Viewing Kerio Valley</strong>
• <strong>Watching animals move freely in their own habitat</strong>
• <strong>Campfire Cooking and Grill Nights</strong>
• <strong>Campfire Storytelling Circle</strong>
• <strong>Water Balloon Toss</strong>
• <strong>Rock Climbing</strong>

…and many, many others designed to connect you with nature and adventure.`,
        suggestions: ['Where are you located?', 'Do you have accommodation?']
    },
    booking: {
        keywords: ['book', 'booking', 'reserve', 'reservation', 'book a tent', 'book a banda'],
        response: `Excellent! To complete your booking, please leave your name and email here, or contact us directly:

📞 <strong>Phone & WhatsApp</strong>: +254 769 021 360
📧 <strong>Email</strong>: tirinyacampsite@gmail.com

Our reservation desk is open daily from 8:00 AM to 8:00 PM.`,
        suggestions: ['Call / Contact Info', 'What are the accommodation rates?']
    },
    contact: {
        keywords: ['contact', 'call', 'email', 'whatsapp', 'phone', 'reach'],
        response: `You can reach Tirinya Campsite directly via:

📞 <strong>Phone & WhatsApp</strong>: +254 769 021 360
📧 <strong>Email</strong>: tirinyacampsite@gmail.com
📍 <strong>Location</strong>: Moi South Lake Road, Lake Naivasha, Kenya

Our reservation desk is open daily from 8:00 AM to 8:00 PM.`,
        suggestions: ['What are the accommodation rates?', 'Where is Tirinya Campsite located?']
    }
};

// Function to get bot response
function getBotResponse(userInput) {
    const input = userInput.toLowerCase();

    // Check each category of responses
    for (const [key, data] of Object.entries(botResponses)) {
        for (const keyword of data.keywords) {
            if (input.includes(keyword)) {
                return {
                    text: data.response,
                    suggestions: data.suggestions
                };
            }
        }
    }

    // Default response
    return {
        text: `I appreciate your message! I'm a simple camp guide chatbot, but our real-life booking manager would love to assist you further. Please reach out to us directly at <strong>info@tirinyacampsite.com</strong> or call <strong>+254 712 345 678</strong> for immediate help!`,
        suggestions: ['What are the accommodation rates?', 'Where is Tirinya Campsite located?', 'Call / Contact Info']
    };
}

// Function to add message to chat
function addMessage(sender, text, suggestions = null) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;

    const avatarDiv = document.createElement('div');
    avatarDiv.className = 'message-avatar';
    avatarDiv.innerHTML = sender === 'bot' ? '<i class="fas fa-robot"></i>' : '<i class="fas fa-user"></i>';

    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';

    const bubbleDiv = document.createElement('div');
    bubbleDiv.className = 'message-bubble';
    bubbleDiv.innerHTML = text;

    contentDiv.appendChild(bubbleDiv);

    if (suggestions && sender === 'bot') {
        const suggestionsDiv = document.createElement('div');
        suggestionsDiv.className = 'message-suggestions';

        suggestions.forEach(suggestion => {
            const btn = document.createElement('button');
            btn.className = 'suggestion-btn';
            btn.textContent = suggestion;
            btn.onclick = () => sendMessage(suggestion);
            suggestionsDiv.appendChild(btn);
        });

        contentDiv.appendChild(suggestionsDiv);
    }

    messageDiv.appendChild(avatarDiv);
    messageDiv.appendChild(contentDiv);

    chatMessages.appendChild(messageDiv);

    // Auto-scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Function to send message
function sendMessage(message) {
    if (!message && !chatInput.value.trim()) return;

    const userMessage = message || chatInput.value.trim();
    chatInput.value = '';

    // Add user message to chat
    addMessage('user', escapeHtml(userMessage));

    // Simulate bot thinking
    setTimeout(() => {
        const response = getBotResponse(userMessage);
        addMessage('bot', response.text, response.suggestions);
    }, 600);
}

// Handle form submission
if (chatForm) {
    chatForm.addEventListener('submit', function(e) {
        e.preventDefault();
        sendMessage();
    });
}

// Allow Enter key to send message
if (chatInput) {
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });
}

// Utility function to escape HTML
function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

console.log('Kibo chat bot loaded successfully!');
