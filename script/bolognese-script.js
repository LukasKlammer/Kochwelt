let recipeDatas = [{
        'number': 2,
        'unit': 'Stk',
        'ingredient': 'Zwiebeln'
    },

    {
        'number': 1,
        'unit': 'Stk',
        'ingredient': 'Karotte'
    },

    {
        'number': 500,
        'unit': 'g',
        'ingredient': 'Rinderhackfleisch'
    },

    {
        'number': 125,
        'unit': 'ml',
        'ingredient': 'Fleischbrühe'
    },

    {
        'number': '1',
        'unit': 'Prise/n',
        'ingredient': 'Salz und Pfeffer'
    },

    {
        'number': 1,
        'unit': 'Dose',
        'ingredient': 'Tomaten, geschälte'
    },

    {
        'number': 500,
        'unit': 'g',
        'ingredient': 'Spaghetti'
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

function writeIngredientsTable(recipeDatas) { // Funktion schreibt die Zutaten-Liste aus den zu übergebenden 3 Arrays
    let tableBodyIngredients = document.getElementById('ingredients'); // Element "table body" mit der ID holen und an Variable tableBodyIngredients zuweisen
    tableBodyIngredients.innerHTML = ''; // Zutaten-Liste vor neuer Beschreibung leeren

    for (let i = 0; i < recipeDatas.length; i++) { // 1. Array wird durchgeschaut - wie lang ist es - entsprechend viele <tr> generieren. ACHTUNG: Auf tableBody zugreifen!! Dieser entsteht immer im Hintergrund automatisch
        const recipeData = recipeDatas[i];
        const multipliedNumber = recipeData['number'] * elevateNumberOfPersons(); // Berechnung der erforderlichen Mengen unter Berücksichtigung der Personenzahl
        tableBodyIngredients.innerHTML += /*html*/ `
            <tr>
                <td>${multipliedNumber} ${recipeData['unit']}</td>
                <td>${recipeData['ingredient']}</td>
            </tr>
        `;
    }
}

function renderPortionButton() { // ändert die Beschriftung des Buttons, abhängig von der eingegebenen Personenzahl
    let buttonPortion = document.getElementById('button-portion');
    if (elevateNumberOfPersons() <= 1) {
        buttonPortion.innerHTML = 'Portion';
    } else {
        buttonPortion.innerHTML = 'Portionen';
    }
}