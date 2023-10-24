export const Card = {
    props:['name', 'svg'],
    template: `
    <div class="uk-inline uk-flex uk-flex-center">
        <div v-html='this.svg' class='uk-width-2-3'>
        
        </div>
        <div class="uk-overlay uk-light uk-position-center uk-text-center uk-width-1-3">
            <h4 class="uk-card-title">{{this.name}}</h4>
        </div>
    </div>
    `
}