import "./content.css";
import { Component } from "react";
class Content extends Component {
    constructor(props){
        super(props);
        this.state={
            title:"",
        }
    }
    render(){ 
        const{title}=this.state;
    return (
        <div className="content">
            <div className="alert alert-primary" role="alert">
        Это основное уведомление — check it out!
      </div>

      <button type="button" className="btn btn-primary">Главный</button>
<button type="button" className="btn btn-secondary">Вторичный</button>
<button type="button" className="btn btn-success">Успех</button>
<button type="button" className="btn btn-danger">Опасность</button>
<button type="button" className="btn btn-warning">Предупреждение</button>
<button type="button" className="btn btn-info">Инфо</button>
<button type="button" className="btn btn-light">Светлый</button>
<button type="button" className="btn btn-dark">Темный</button>

<div className="card">
  <img src="https://avatarko.ru/img/kartinka/14/multfilm_13267.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Стич</h5>
    <p className="card-text">имя генетического эксперимента 626, главный персонаж франшизы «Лило и Стич». Стич — придуманный инопланетянин, изначально созданный чтобы создавать большой хаос в галактике и разных городах. Отличается исключительной вспыльчивостью и разрушительным поведением, которые, тем не менее, удается укротить земной девочке Лило, взявшей его себе в качестве маленького комочка счастья. Оригинальное озвучивание — Крис Сандерс и Бенджамин Дискин. В русском дубляже озвучен актёрами Николаем Колевым и Николаем Шуликом.</p>
    <a href="https://ru.wikipedia.org/wiki/%D0%A1%D1%82%D0%B8%D1%87" className="btn btn-primary">Перейти</a>
  </div>
</div>

<nav aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item active" aria-current="page">{title}</li>
  </ol>
</nav>

<nav aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><a href="#">{title}</a></li>
    <li className="breadcrumb-item active" aria-current="page">{title}</li>
  </ol>
</nav>

<nav aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><a href="#">{title}</a></li>
    <li className="breadcrumb-item"><a href="#">{title}</a></li>
    <li className="breadcrumb-item active" aria-current="page">{title}</li>
  </ol>
</nav>
        </div>
    )
}
}
export default Content;