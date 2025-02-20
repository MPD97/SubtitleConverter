const replacements = {
    '³': 'ł', 'ê': 'ę', '¿': 'ż', '¹': 'ą', 'æ': 'ć',
    'Ÿ': 'ź', 'ñ': 'ń', '¯': 'Ż', '¥': 'Ą', 'Ê': 'Ę',
    'Ñ': 'Ń', '\u008F': 'Ź', 'œ': 'ś'
};

const translations = {
    pl: {
        title: 'Konwerter Polskich Znaków',
        description1: 'Aplikacja do konwersji polskich znaków w napisach do filmów. Prosta w obsłudze strona, która pozwala szybko zamienić tekst z napisów, usuwając lub poprawiając polskie znaki. Idealne rozwiązanie dla osób, które potrzebują szybkiej korekty w swoich plikach napisów.',
        description2: 'Poniżej prezentujemy efekt działania narzędzia – zdjęcia przed i po konwersji. Jeśli podoba ci się to, co robię, możesz wesprzeć projekt, kupując mi kawę! :)',
        before: 'Przed konwersją',
        after: 'Po konwersji',
        dragDropText: 'Przeciągnij pliki tutaj lub',
        selectFiles: 'Wybierz pliki',
        portfolio: 'Moje Portfolio',
        allowedFormats: 'Dozwolone formaty: .txt, .srt, .sub, .sbt, .dat',
        maxFileSize: 'Maksymalny rozmiar pliku: 2MB',
        fileTooLarge: 'Plik jest zbyt duży. Maksymalny rozmiar to 2MB',
        invalidFileType: 'Niedozwolony format pliku'
    },
    en: {
        title: 'Polish Characters Converter',
        description1: 'Application for converting Polish characters in movie subtitles. An easy-to-use website that allows you to quickly convert subtitle text by removing or fixing Polish characters. Perfect solution for those who need quick corrections in their subtitle files.',
        description2: 'Below we present the tool\'s effect - before and after conversion images. If you like what I do, you can support the project by buying me a coffee! :)',
        before: 'Before conversion',
        after: 'After conversion',
        dragDropText: 'Drag files here or',
        selectFiles: 'Select files',
        portfolio: 'My Portfolio',
        allowedFormats: 'Allowed formats: .txt, .srt, .sub, .sbt, .dat',
        maxFileSize: 'Maximum file size: 2MB',
        fileTooLarge: 'File is too large. Maximum size is 2MB',
        invalidFileType: 'Invalid file type'
    }
};

class FileConverter {
    constructor() {
        this.dropZone = document.getElementById('dropZone');
        this.fileInput = document.getElementById('fileInput');
        this.fileList = document.getElementById('fileList');
        this.MAX_FILE_SIZE = 2 * 1024 * 1024; // 2MB w bajtach
        this.ALLOWED_TYPES = ['.txt', '.srt', '.sub', '.sbt', '.dat'];
        this.initializeEventListeners();
    }

    initializeEventListeners() {
        this.dropZone.addEventListener('dragover', (e) => this.handleDragOver(e));
        this.dropZone.addEventListener('dragleave', (e) => this.handleDragLeave(e));
        this.dropZone.addEventListener('drop', (e) => this.handleDrop(e));
        this.fileInput.addEventListener('change', (e) => this.handleFileSelect(e));
    }

    handleDragOver(e) {
        e.preventDefault();
        this.dropZone.classList.add('drag-over');
    }

    handleDragLeave(e) {
        e.preventDefault();
        this.dropZone.classList.remove('drag-over');
    }

    handleDrop(e) {
        e.preventDefault();
        this.dropZone.classList.remove('drag-over');
        const files = e.dataTransfer.files;
        this.processFiles(files);
    }

    handleFileSelect(e) {
        const files = e.target.files;
        this.processFiles(files);
    }

    validateFile(file) {
        // Sprawdzanie rozmiaru pliku
        if (file.size > this.MAX_FILE_SIZE) {
            alert(translations[document.documentElement.lang].fileTooLarge);
            return false;
        }

        // Sprawdzanie rozszerzenia pliku
        const extension = '.' + file.name.split('.').pop().toLowerCase();
        if (!this.ALLOWED_TYPES.includes(extension)) {
            alert(translations[document.documentElement.lang].invalidFileType);
            return false;
        }

        return true;
    }

    async processFiles(files) {
        for (const file of files) {
            if (this.validateFile(file)) {
                try {
                    const content = await this.readFile(file);
                    const convertedContent = this.convertContent(content);
                    this.downloadFile(convertedContent, file.name);
                } catch (error) {
                    console.error(`Error processing file ${file.name}:`, error);
                }
            }
        }
    }

    readFile(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (e) => resolve(e.target.result);
            reader.onerror = (e) => reject(e);
            reader.readAsText(file);
        });
    }

    convertContent(content) {
        let convertedContent = content;
        for (const [from, to] of Object.entries(replacements)) {
            convertedContent = convertedContent.replaceAll(from, to);
        }
        return convertedContent;
    }

    downloadFile(content, fileName) {
        const blob = new Blob([content], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `converted_${fileName}`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
    }
}

class LanguageManager {
    constructor() {
        this.currentLang = this.getBrowserLanguage();
        this.init();
    }

    getBrowserLanguage() {
        const browserLang = navigator.language.split('-')[0];
        return ['pl', 'en'].includes(browserLang) ? browserLang : 'en';
    }

    init() {
        this.initLanguageSwitcher();
        this.setLanguage(this.currentLang);
    }

    initLanguageSwitcher() {
        const buttons = document.querySelectorAll('.lang-btn');
        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                const lang = btn.dataset.lang;
                this.setLanguage(lang);
            });
        });
    }

    setLanguage(lang) {
        this.currentLang = lang;
        document.documentElement.lang = lang;
        
        // Update active button state
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });

        // Update translations
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.dataset.translate;
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });

        // Save language preference
        localStorage.setItem('preferredLanguage', lang);
    }
}

// Initialize both classes when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new FileConverter();
    new LanguageManager();
});
