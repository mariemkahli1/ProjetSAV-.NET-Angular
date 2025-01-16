import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})

  export class ArticlesComponent implements OnInit {
    articles: Article[] = [];
    newArticle: Article = {
      id: 0,
      libelle: '',
      estSousGarantie: false,
      prix: 0,
    };
    isEditing: boolean = false;
    constructor(private articleService: ArticleService) {}
  
    ngOnInit(): void {
      this.fetchArticles();
    }
  
    fetchArticles() {
      this.articleService.getArticles().subscribe((data) => {
        this.articles = data;
      });
    }
  
    addArticle() {
      if (this.newArticle.libelle && this.newArticle.prix >= 0) {
        this.articleService.addArticle(this.newArticle).subscribe(() => {
          this.fetchArticles(); // Rafraîchit la liste des articles
          this.resetNewArticle(); // Réinitialise le formulaire
        });
      } else {
        alert('Veuillez remplir tous les champs obligatoires.');
      }
    }
  
    deleteArticle(id: number) {
      if (confirm('Êtes-vous sûr de vouloir supprimer cet article ?')) {
        this.articleService.deleteArticle(id).subscribe(() => {
          this.fetchArticles(); // Rafraîchit la liste après suppression
        });
      }
    }
    updateArticle() {
      this.articleService.updateArticle(this.newArticle).subscribe(() => {
        this.fetchArticles();
        this.resetNewArticle();
        this.isEditing = false;
      });
    }
    editArticle(article: Article) {
      this.newArticle = { ...article }; // Clone l'article à éditer
      this.isEditing = true;
    }
    resetNewArticle() {
      this.newArticle = {
        id: 0,
        libelle: '',
        estSousGarantie: false,
        prix: 0,
      };
    }
}
