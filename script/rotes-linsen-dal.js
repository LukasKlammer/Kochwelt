let recipeDatas = [{
        'number': 2,
        'unit': 'Stk',
        'ingredient': 'Zwiebeln'
    },

    {
        'number': 4,
        'unit': 'Stk',
        'ingredient': 'Knoblauchzehen'
    },

    {
        'number': 1,
        'unit': 'El',
        'ingredient': 'Kurkuma'
    },

    {
        'number': 1,
        'unit': 'El',
        'ingredient': 'Koriander'
    },

    {
        'number': 1,
        'unit': 'El',
        'ingredient': 'Kreuzkümmel'
    },

    {
        'number': 1,
        'unit': 'El',
        'ingredient': 'Rotes Paprikapulver'
    },

    {
        'number': 1,
        'unit': 'El',
        'ingredient': 'Garam Masala'
    },

    {
        'number': 300,
        'unit': 'g',
        'ingredient': 'Rote Linsen'
    },

    {
        'number': 780,
        'unit': 'ml',
        'ingredient': 'Gemüsebrühe'
    },

    {
        'number': 250,
        'unit': 'ml',
        'ingredient': 'Kokosnussmilch'
    },

    {
        'number': 250,
        'unit': 'ml',
        'ingredient': 'Tomaten, passiert'
    },

    {
        'number': 2,
        'unit': 'El',
        'ingredient': 'Kokoszucker'
    },

    {
        'number': 2,
        'unit': 'El',
        'ingredient': 'Zitronensaft'
    }
];


function start() {
    includeHTML();
    renderDataOutput();
}

function renderDataOutput() { // variable Daten schreiben
    renderPortionButton();
    writeIngredientsTable(recipeDatas);
}

function elevateNumberOfPersons() { // liest die Anzahl Personen aus dem input-Feld aus
    numberOfPersons = document.getElementById('number-of-persons').value;
    return numberOfPersons
}

function writeIngredientsTable(recipeDatas) { // Funktion schreibt die Zutaten-Liste aus dem oben genannten Array
    let tableBodyIngredients = document.getElementById('ingredients'); // Element "table body" mit der ID holen und an Variable tableBodyIngredients zuweisen
    tableBodyIngredients.innerHTML = ''; // Zutaten-Liste vor neuer Beschreibung leeren

    for (let i = 0; i < recipeDatas.length; i++) { // Array wird durchgeschaut - wie lang ist es - entsprechend viele <tr> generieren. ACHTUNG: Auf tableBody zugreifen!! Dieser entsteht immer im Hintergrund automatisch
        const recipeData = recipeDatas[i];
        const multipliedNumber = recipeData['number'] * elevateNumberOfPersons(); // Berechnung der erforderlichen Mengen unter Berücksichtigung der Personenzahl
        tableBodyIngredients.innerHTML += /*html*/ `
            <tr>
                <td>${multipliedNumber} ${recipeData['unit']}</td>
                <td>${recipeData['ingredient']}</td>
            </tr>
        `;
    };
}

function renderPortionButton() { // ändert die Beschriftung des Buttons, abhängig von der eingegebenen Personenzahl
    let buttonPortion = document.getElementById('button-portion');
    if (elevateNumberOfPersons() <= 1) {
        buttonPortion.innerHTML = 'Portion';
    } else {
        buttonPortion.innerHTML = 'Portionen';
    }
};