// Estrutura JSON com os dados dos jogos
const games = [
    {
        id: 1,
        title: "NFS: Most Wanted",
        shortDescription: "Se torne o mais procurado de Rockport city correndo com a polícia e outros pilotos em uma batalha épica por fama e liberdade.",
        fullDescription: "Need for Speed: Most Wanted é um jogo de corrida que coloca você no papel de um piloto que precisa escalar a lista dos mais procurados da cidade de Rockport. Com uma jogabilidade emocionante, gráficos impressionantes e uma trilha sonora marcante, este jogo se tornou um clássico da franquia Need for Speed. Personalize seus carros, desbloqueie novos veículos e domine as ruas da cidade enquanto foge da polícia e compete contra outros pilotos.",
        genre: "Corrida",
        rating: 5.0,
        releaseYear: 2005,
        developer: "EA Black Box",
        publisher: "Electronic Arts",
        platforms: ["PC", "PlayStation 2", "Xbox", "GameCube"],
        image: "mw.jpg",
        features: ["Mundo aberto", "Personalização de veículos", "Perseguições policiais", "Lista dos mais procurados"]
    },
    {
        id: 2,
        title: "Devil May Cry 3",
        shortDescription: "JACKPOT!!!! Conheça o inicio da jornada de Dante na luta contra demônios e sua busca por vingança.",
        fullDescription: "Devil May Cry 3: Dante's Awakening é um jogo de ação e hack and slash que serve como prequel para a série. Acompanhe a origem da rivalidade entre os irmãos gêmeos Dante e Vergil em uma batalha épica pelo poder. Com um sistema de combate profundo e estilos de jogo variados, DMC3 é considerado um dos melhores jogos de ação de todos os tempos. Domine diferentes armas e estilos para derrotar hordas de demônios em combates espetaculares.",
        genre: "Ação",
        rating: 4.9,
        releaseYear: 2005,
        developer: "Capcom",
        publisher: "Capcom",
        platforms: ["PC", "PlayStation 2", "Nintendo Switch"],
        image: "dmc3.jpg",
        features: ["Combate estilo hack and slash", "Múltiplos estilos de jogo", "Arsenal variado de armas", "Chefes desafiadores"]
    },
    {
        id: 3,
        title: "Bloodborne",
        shortDescription: "Feras por toda parte... Você vai ser uma delas, mais cedo ou mais tarde.",
        fullDescription: "Bloodborne é um RPG de ação ambientado na cidade gótica de Yharnam, conhecida por abrigar uma doença que transforma as pessoas em bestas. Inspirado nos contos de H.P. Lovecraft, o jogo oferece uma experiência desafiadora com combate rápido e estratégico. Explore ruas sombrias, enfrente criaturas aterrorizantes e desvende os mistérios por trás da caçada. Com uma atmosfera opressiva e uma narrativa profunda, Bloodborne é uma obra-prima da FromSoftware.",
        genre: "RPG de Ação",
        rating: 4.7,
        releaseYear: 2015,
        developer: "FromSoftware",
        publisher: "Sony Computer Entertainment",
        platforms: ["PlayStation 4"],
        image: "bloodborn2.jpg",
        features: ["Mundo interconectado", "Combate rápido e agressivo", "Sistema de armas transformáveis", "Atmosfera lovecraftiana"]
    },
    {
        id: 4,
        title: "The Witcher 3: Wild Hunt",
        shortDescription: "Em busca da criança da profecia, em um mundo aberto repleto de decisões morais.",
        fullDescription: "The Witcher 3: Wild Hunt é um RPG de mundo aberto que coloca você no papel de Geralt de Rivia, um bruxo caçador de monstros. Em uma jornada épica para encontrar sua filha adotiva, Ciri, você explorará um continente devastado pela guerra, tomará decisões que moldam o mundo ao seu redor e enfrentará criaturas perigosas. Com uma narrativa rica, personagens memoráveis e um mundo vibrante, The Witcher 3 é considerado um dos melhores RPGs já feitos.",
        genre: "RPG",
        rating: 4.95,
        releaseYear: 2015,
        developer: "CD Projekt Red",
        publisher: "CD Projekt",
        platforms: ["PC", "PlayStation 4", "Xbox One", "Nintendo Switch"],
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
        features: ["Mundo aberto vasto", "História não linear", "Sistema de alquimia", "Caça a monstros"]
    },
    {
        id: 5,
        title: "Red Dead Redemption 2",
        shortDescription: "A vida no velho oeste nunca foi fácil, especialmente para um fora da lei.",
        fullDescription: "Red Dead Redemption 2 é um épico do velho oeste que narra a história de Arthur Morgan e da gangue Van der Linde enquanto fogem das forças da lei. Em um mundo aberto imersivo, você viverá a vida de um fora da lei, tomando decisões que afetam seu destino e o das pessoas ao seu redor. Com gráficos deslumbrantes, uma narrativa profunda e uma atenção incrível aos detalhes, RDR2 é uma experiência inesquecível.",
        genre: "Ação e Aventura",
        rating: 4.8,
        releaseYear: 2018,
        developer: "Rockstar Games",
        publisher: "Rockstar Games",
        platforms: ["PC", "PlayStation 4", "Xbox One"],
        image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
        features: ["Mundo aberto realista", "Sistema de honra", "Atividades diversificadas", "História emocionante"]
    },
    {
        id: 6,
        title: "God of War (2018)",
        shortDescription: "A jornada de um pai e seu filho pelos reinos nórdicos em busca de respostas.",
        fullDescription: "God of War (2018) reinventa a franquia, levando Kratos para o mundo da mitologia nórdica. Agora como pai, ele deve guiar seu filho Atreus em uma jornada perigosa enquanto lida com seu passado violento. Com um sistema de combate visceral, uma narrativa emocionante sobre paternidade e um mundo interconectado para explorar, God of War é uma obra-prima que redefine o que um jogo de ação pode ser.",
        genre: "Ação e Aventura",
        rating: 4.9,
        releaseYear: 2018,
        developer: "Santa Monica Studio",
        publisher: "Sony Interactive Entertainment",
        platforms: ["PC", "PlayStation 4"],
        image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
        features: ["Câmera em plano-sequência", "Combate com machado leviatã", "Exploração dos reinos nórdicos", "Narrativa sobre paternidade"]
    }
];

// Função para carregar os jogos na página inicial
function loadGames() {
    const gamesContainer = document.getElementById('games-container');
    
    if (gamesContainer) {
        gamesContainer.innerHTML = '';
        
        games.forEach(game => {
            const gameCard = `
                <div class="col-md-6 col-lg-4">
                    <a href="detalhes.html?id=${game.id}" class="game-card">
                        <img src="${game.image}" alt="${game.title}" class="card-img-top">
                        <div class="card-body">
                            <h3 class="game-title">${game.title}</h3>
                            <p class="game-desc">${game.shortDescription}</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <span class="game-genre">${game.genre}</span>
                                <span class="game-rating"><i class="fas fa-star"></i> ${game.rating}</span>
                            </div>
                        </div>
                    </a>
                </div>
            `;
            
            gamesContainer.innerHTML += gameCard;
        });
    }
}

// Função para carregar os detalhes do jogo na página de detalhes
function loadGameDetails() {
    const gameDetailsContainer = document.getElementById('game-details-container');
    
    if (gameDetailsContainer) {
        // Obter o ID do jogo da URL
        const urlParams = new URLSearchParams(window.location.search);
        const gameId = parseInt(urlParams.get('id'));
        
        // Encontrar o jogo pelo ID
        const game = games.find(g => g.id === gameId);
        
        if (game) {
            const platformsHTML = game.platforms.map(platform => 
                `<span class="game-meta-badge">${platform}</span>`
            ).join('');
            
            const featuresHTML = game.features.map(feature => 
                `<li>${feature}</li>`
            ).join('');
            
            const gameDetailsHTML = `
                <div class="game-detail-card">
                    <div class="row g-0">
                        <div class="col-md-6">
                            <img src="${game.image}" alt="${game.title}" class="game-detail-img">
                        </div>
                        <div class="col-md-6">
                            <div class="p-4">
                                <h1 class="display-4 fw-bold mb-3">${game.title}</h1>
                                <div class="mb-3">
                                    <span class="game-meta-badge">${game.genre}</span>
                                    <span class="game-meta-badge">${game.releaseYear}</span>
                                    <span class="game-rating"><i class="fas fa-star"></i> ${game.rating}</span>
                                </div>
                                <p class="lead mb-4">${game.fullDescription}</p>
                                
                                <div class="mb-4">
                                    <h4 class="mb-3">Informações do Jogo</h4>
                                    <div class="row">
                                        <div class="col-sm-6">
                                            <p><strong>Desenvolvedora:</strong> ${game.developer}</p>
                                            <p><strong>Publicadora:</strong> ${game.publisher}</p>
                                        </div>
                                        <div class="col-sm-6">
                                            <p><strong>Ano de Lançamento:</strong> ${game.releaseYear}</p>
                                            <p><strong>Avaliação:</strong> <span class="game-rating">${game.rating}/5.0</span></p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="mb-4">
                                    <h4 class="mb-3">Plataformas</h4>
                                    ${platformsHTML}
                                </div>
                                
                                <div class="mb-4">
                                    <h4 class="mb-3">Características Principais</h4>
                                    <ul class="ps-3">
                                        ${featuresHTML}
                                    </ul>
                                </div>
                                
                                <button class="btn btn-primary btn-lg mt-3">
                                    <i class="fas fa-shopping-cart me-2"></i>Adicionar à Coleção
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            
            gameDetailsContainer.innerHTML = gameDetailsHTML;
            
            // Atualizar o título da página
            document.title = `${game.title} - GameVault`;
        } else {
            gameDetailsContainer.innerHTML = `
                <div class="alert alert-danger text-center">
                    <h2>Jogo não encontrado</h2>
                    <p>O jogo que você está procurando não existe ou foi removido.</p>
                    <a href="index.html" class="btn btn-primary">Voltar para a página inicial</a>
                </div>
            `;
        }
    }
}

// Inicializar a página correta
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('detalhes.html')) {
        loadGameDetails();
    } else {
        loadGames();
    }
});