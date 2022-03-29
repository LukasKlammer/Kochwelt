let recipeDatas = [{
        'number': 200,
        'unit': 'g',
        'ingredient': 'Dorade, auch Goldbrasse genannt'
    },

    {
        'number': 100,
        'unit': 'g',
        'ingredient': 'Frische Cocktail-Tomaten'
    },

    {
        'number': 150,
        'unit': 'g',
        'ingredient': 'Gedünstetes Gemüse nach Wahl'
    },

    {
        'number': 200,
        'unit': 'g',
        'ingredient': 'Hüttenkäse'
    },

    {
        'number': 0.5,
        'unit': 'Stk.',
        'ingredient': 'Zitrone'
    },

    {
        'number': 1,
        'unit': 'Stk.',
        'ingredient': 'Selbst gebackenes Brot'
    },

    {
        'number': 1,
        'unit': 'Prise/n',
        'ingredient': 'Rosmarin, Salz'
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