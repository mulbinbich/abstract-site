class Site {
    constructor() {
        //Site의 인스턴스 생성 및 초기화
        //boards라는 특성(property)을 갖는데,
        //그 특성이란 board들을 담는 array이다 
        this.boards = [];
    }

    addBoard(board) {
        if (this.boards.find((boardInfo) => boardInfo.name === board.name)) {
            throw new Error();
        }
        // for (let i = 0; i < this.boards.length; i++) {
        //     if (this.boards[i].name === board.name) {
        //         throw new Error();
        //     }
        // }
        board.check = true;
        this.boards.push(board);
    }

    findBoardByName(name) {
        return this.boards.find((board) => board.name === name);
    }
}

class Board {
    constructor(name) {
        if (name === null || name === "") {
            throw new Error();
        }
        this.name = name;
        this.check = false;
        this.articles = [];
    }
    
    publish(article) {
        if (this.check === false) {
            throw new Error();
        }
        article.id = `${this.name}-${Math.random()}`;
        article.createdDate = new Date().toISOString();
        this.articles.push(article);
        article.check = true;
    }

    getAllArticles() {
        return this.articles;
    }
}

class Article {
    constructor(article) {
        const { subject, content, author } = article;
        if (subject === null || subject === '' || content === null || content === '' || author === null || author === '') {
            throw new Error();
        }
        this.subject = subject;
        this.content = content;
        this.author = author;
        this.check = false;
        this.comments = [];
    }

    reply(comment) {
        if (this.check === false) {
            throw new Error();
        }
        comment.createdDate = new Date().toISOString();
        this.comments.push(comment);
    }

    getAllComments() {
        return this.comments;
    }
 }

class Comment {
    constructor(comment) {
        const { content, author } = comment;
        if (content === null || content === '' || author === null || author === '') {
            throw new Error();
        }
        this.content = content;
        this.author = author;
    }
}

module.exports = {
    Site,
    Board,
    Article,
    Comment,
};
