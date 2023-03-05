import { Component } from "react";
import css from "../Searchbar/Searchbar.module.css";


export class Searchbar extends Component {
 state ={

 }


render(){
return <header className ={css.Searchbar}>
  <form className={css.SearchForm}>
    <button type="submit" class={css.SearchForm-button}>
      <span className={css.SearchForm-button-label}>Search</span>
    </button>
    <input
      className={css.SearchForm-input}
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </form>
</header>
}
}
