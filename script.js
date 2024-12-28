// 🎓 Big O Notation

// 🚀 O(1) : Temps Constant
const getLast = (items) => {
    return items[items.length - 1];
}

console.log(getLast(['🍎', '🍌', '🍇', '🍒']));
console.log(getLast([1, 2, 3, 4, 5]));

// 🐢 O(N) : Temps Linéaire
const findIndex = (items, match) => {
    for (let i = 0; i < items.length; i++) {
        if (items[i] === match) return i;
    }

    return -1;
}

console.log(findIndex(['🍎', '🍌', '🍇', '🍒'], '🍇'));
console.log(findIndex([1, 2, 3, 4, 5], 6));

// O(N²) : Temps Quadratique
const buildSquareMatrix = (items) => {
    const matrix = [];
    for (let i = 0; i < items.length; i++) {
        matrix[i] = [];
        for (let j = 0; j < items.length; j++) {
            matrix[i].push(items[j]);
        }
    }
    return matrix;
}

console.log(buildSquareMatrix(['🍎', '🍌', '🍇']));

// O(N log N) : Temps Logarithmique
const quickSort = (list) => {
    if (list.length < 2) return list;
    const pivot = list[0];
    const left = list.slice(1).filter(item => item < pivot);
    const right = list.slice(1).filter(item => item >= pivot);
    return [...quickSort(left), pivot, ...quickSort(right)];
}

// 🧪 Exemple :
console.log(quickSort(['🍎', '🍌', '🍇', '🍒', '🍉']));
// Résultat : [ '🍇', '🍉', '🍎', '🍌', '🍒' ]

// 📜 Résumé des Complexités Big O :
// 🟢 O(1) : Ultra rapide, insensible à la taille 🎯
// 🔵 O(N) : Plus lent, dépend de la taille de l'entrée 🐌
// 🟡 O(N²) : Très lent, attention ⚠️
// 🟣 O(N log N) : Le meilleur compromis pour les grandes données 💜
