const pets = [
    { id: 1, nome: "Max", raca: "Labrador", idade: "2 anos", tipo: "caes", descricao: "Brincalhão e muito carinhoso. Adora crianças e passeios no parque.", detalhes: ["Vacinado", "Vermifugado"], imagem: "/assets/max.jpg" },
    { id: 2, nome: "Luna", raca: "Siamesa", idade: "1 ano", tipo: "gatos", descricao: "Elegante e curiosa. Gosta de ambientes calmos e carinhos suaves.", detalhes: ["Vacinada", "Castrada"], imagem: "/assets/luna.jpg" },
    { id: 3, nome: "Thor", raca: "Pastor Alemão", idade: "3 anos", tipo: "caes", descricao: "Leal e protetor. Ideal para famílias que gostam de atividades ao ar livre.", detalhes: ["Vacinado", "Treinado"], imagem: "/assets/thor.jpg" },
    { id: 4, nome: "Nina", raca: "Persa", idade: "2 anos", tipo: "gatos", descricao: "Tranquila e amorosa. Perfeita para apartamentos e donos tranquilos.", detalhes: ["Vacinada", "Pelagem longa"], imagem: "/assets/nina.jpg" },
    { id: 5, nome: "Mel", raca: "Vira-lata", idade: "4 meses", tipo: "caes", descricao: "Filhote energética e muito dócil. Aprendendo comandos básicos.", detalhes: ["Filhote", "Vacinada"], imagem: "/assets/mel.png" },
    { id: 6, nome: "Amora", raca: "Vira-lata", idade: "1 ano", tipo: "gatos", descricao: "Adora aconchego e atenção.", detalhes: ["Vacinado", "Banho semanal"], imagem: "/assets/amora.jpg" },
    { id: 7, nome: "Bob", raca: "Poodle", idade: "5 anos", tipo: "caes", descricao: "Inteligente e cheio de energia.", detalhes: ["Vacinado", "Adestrado"], imagem: "/assets/bob.jpg" },
    { id: 8, nome: "Kiara", raca: "Pitbull", idade: "8 meses", tipo: "caes", descricao: "Brincalhona e independente. Se dá bem com crianças.", detalhes: ["Vacinada", "Castrada"], imagem: "/assets/kiara.jpg" },
    { id: 9, nome: "Zeus", raca: "Buldogue Francês", idade: "2 anos", tipo: "caes", descricao: "Companheiro e tranquilo. Ronca fofinho e adora sonecas no sofá.", detalhes: ["Vacinado", "Brincalhão"], imagem: "/assets/zeus.jpg" }
];

function criarCardPet(pet) {
    return `
        <div class="card-pet" data-categoria="${pet.tipo}">
            <div class="pet-imagem">
                <img src="${pet.imagem}" alt="${pet.nome} - ${pet.raca}" loading="lazy">
                <div class="pet-tipo">${pet.tipo === 'caes' ? '🐕' : '🐈'}</div>
            </div>
            <div class="pet-info">
                <h3>${pet.nome}</h3>
                <p class="pet-raca">${pet.raca} - ${pet.idade}</p>
                <p class="pet-descricao">${pet.descricao}</p>
                <div class="pet-detalhes">${pet.detalhes.map(d => `<span>${d}</span>`).join('')}</div>
                <button class="btn-quero" data-pet="${pet.nome}">Eu Quero!</button>
            </div>
        </div>
    `;
}

function carregarPets() {
    const gradePets = document.getElementById('gradePets');
    if (!gradePets) return;
    gradePets.innerHTML = pets.map(criarCardPet).join('');
}

function filtrarPets(filtro) {
    document.querySelectorAll('.card-pet').forEach(card => {
        const categoria = card.dataset.categoria;
        card.style.display = (filtro === 'todos' || categoria === filtro) ? '' : 'none';
    });
}

function abrirModal(nomePet) {
    const modal = document.getElementById('modalAdocao');
    const nomePetSpan = document.getElementById('nomePet');
    if (!modal || !nomePetSpan) return;
    nomePetSpan.textContent = nomePet;
    modal.style.display = 'block';
}

function fecharModal() {
    const modal = document.getElementById('modalAdocao');
    if (modal) modal.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    carregarPets();

    document.addEventListener('click', (e) => {
        const el = e.target;

        if (el.matches('.filtro-btn')) {
            document.querySelectorAll('.filtro-btn').forEach(b => b.classList.remove('active'));
            el.classList.add('active');
            filtrarPets(el.dataset.filtro || 'todos');
            return;
        }

        if (el.matches('.btn-quero')) {
            abrirModal(el.dataset.pet);
            return;
        }

        if (el.matches('.close-modal') || el.matches('.btn-fechar-modal')) {
            fecharModal();
            return;
        }
    });

    window.addEventListener('click', (e) => {
        const modal = document.getElementById('modalAdocao');
        if (modal && e.target === modal) fecharModal();
    });

    const menuToggle = document.getElementById('menuToggle');
    const menuList = document.getElementById('menuList');
    if (menuToggle && menuList) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            menuList.classList.toggle('show');
        });
    }
});
