// Sample contact data with enhanced fields
let contacts = [
  {
    id: crypto.randomUUID(),
    name: 'John Doe',
    phone: '555-123-4567',
    email: 'john@example.com',
    category: 'work',
    favorite: true,
    profilePic: '',
    birthday: '1990-06-15',
    tags: ['mentor', 'tech'],
    notes: 'Met at DevCon.',
    address: '123 Main St, Toronto',
    linkedin: 'https://linkedin.com/in/johndoe',
    instagram: 'https://instagram.com/johndoe'
  }
];

// Render contact cards
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('contactsContainer');
  container.innerHTML = `<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    ${contacts.map(c => createCardHTML(c)).join('')}
  </div>`;
});

function createCardHTML(contact) {
  return `
    <div class="bg-white rounded-lg shadow p-4 contact-card fade-in">
      <div class="flex items-center gap-4">
        <img src="${contact.profilePic || 'https://via.placeholder.com/64'}" class="w-16 h-16 rounded-full object-cover" />
        <div>
          <h3 class="font-bold text-lg">${contact.name}</h3>
          <div class="text-sm text-gray-500">${contact.category}</div>
        </div>
      </div>
      <div class="mt-4 text-gray-600 space-y-1">
        <div><i class="fas fa-phone mr-2 w-4"></i>${contact.phone}</div>
        ${contact.email ? `<div><i class="fas fa-envelope mr-2 w-4"></i>${contact.email}</div>` : ''}
        ${contact.birthday ? `<div><i class="fas fa-birthday-cake mr-2 w-4"></i>${contact.birthday}</div>` : ''}
        ${contact.address ? `<div><i class="fas fa-map-marker-alt mr-2 w-4"></i>${contact.address}</div>` : ''}
        ${contact.notes ? `<div class="text-sm italic">"${contact.notes}"</div>` : ''}
        ${contact.tags?.length ? `<div class="mt-2">${contact.tags.map(t => `<span class="text-xs bg-indigo-100 text-indigo-800 rounded px-2 py-0.5 mr-1">${t}</span>`).join('')}</div>` : ''}
        ${contact.linkedin ? `<a href="${contact.linkedin}" target="_blank" class="block text-blue-600 hover:underline"><i class="fab fa-linkedin mr-2"></i>LinkedIn</a>` : ''}
        ${contact.instagram ? `<a href="${contact.instagram}" target="_blank" class="block text-pink-500 hover:underline"><i class="fab fa-instagram mr-2"></i>Instagram</a>` : ''}
      </div>
    </div>
  `;
}
