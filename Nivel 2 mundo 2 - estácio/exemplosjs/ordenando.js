// Função para trocar valores no vetor
const swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
};

// Função para embaralhar elementos do vetor
const shuffle = (arr, swaps) => {
    for (let i = 0; i < swaps; i++) {
        const randIndex1 = Math.floor(Math.random() * arr.length);
        const randIndex2 = Math.floor(Math.random() * arr.length);
        swap(arr, randIndex1, randIndex2);
    }
};

// Função Bubble Sort
const bubble_sort = (arr) => {
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
};

// Função Selection Sort
const selection_sort = (arr) => {
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        swap(arr, i, minIndex);
    }
};

// Função de particionamento para o Quick Sort
const particionamento = (arr, low, high) => {
    const pivot = arr[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, i + 1, high);
    return i + 1;
};

// Função Quick Sort
const quick_sort = (arr, low = 0, high = arr.length - 1) => {
    if (low < high) {
        const pi = particionamento(arr, low, high);
        quick_sort(arr, low, pi - 1);
        quick_sort(arr, pi + 1, high);
    }
};
