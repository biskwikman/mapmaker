<script>
import { layout } from '../../stores/stores.js';

const makeLineShort = () => {
    $layout.lineLength = 'line-short';
}

const makeLineLong = () => {
    $layout.lineLength = 'line-long';
}

const makeTextBottom = () => {
    if ($layout.backgroundStyle === 'overlay-solid-top') {
        $layout.backgroundStyle = 'overlay-solid-bottom';
    } else if ($layout.backgroundStyle === 'overlay-fade-top') {
        $layout.backgroundStyle = 'overlay-fade-bottom';
    }
}

const makeTextTop = () => {
    if ($layout.backgroundStyle === 'overlay-solid-bottom') {
        $layout.backgroundStyle = 'overlay-solid-top';
    } else if ($layout.backgroundStyle === 'overlay-fade-bottom') {
        $layout.backgroundStyle = 'overlay-fade-top';
    }
}

const makeFaded = () => {
    if ($layout.backgroundStyle === 'overlay-solid-bottom') {
        $layout.backgroundStyle = 'overlay-fade-bottom';
    } else if ($layout.backgroundStyle === 'overlay-solid-top') {
        $layout.backgroundStyle = 'overlay-fade-top';
    }
}

const makeSolid = () => {
    if ($layout.backgroundStyle === 'overlay-fade-bottom') {
        $layout.backgroundStyle = 'overlay-solid-bottom';
    } else if ($layout.backgroundStyle === 'overlay-fade-top') {
        $layout.backgroundStyle = 'overlay-solid-top';
    }
}
</script>

<div>
    <p>Line Length</p>
    <button class:selected={$layout.lineLength === 'line-short'} on:click="{makeLineShort}">Short</button>
    <button class:selected={$layout.lineLength === 'line-long'} on:click="{makeLineLong}">Long</button>
</div>
<div>
    <p>Text Placement</p>
    <button class:selected={$layout.backgroundStyle === 'overlay-solid-bottom' || $layout.backgroundStyle === 'overlay-fade-bottom'} on:click="{makeTextBottom}">Bottom</button>
    <button class:selected={$layout.backgroundStyle === 'overlay-solid-top' || $layout.backgroundStyle === 'overlay-fade-top'} on:click="{makeTextTop}">Top</button>
</div>
<div>
    <p>Text Box Style</p>
    <button class:selected={$layout.backgroundStyle === 'overlay-solid-top' || $layout.backgroundStyle === 'overlay-solid-bottom'} on:click="{makeSolid}">Solid</button>
    <button class:selected={$layout.backgroundStyle === 'overlay-fade-top' || $layout.backgroundStyle === 'overlay-fade-bottom'} on:click="{makeFaded}">Fade</button>
</div>
<div>
    <p>Font</p>
    <select bind:value={$layout.fontFamily}>
        <option value='Arial'>Arial</option>
        <option value='Trebuchet MS'>Trebuchet MS</option>
        <option value='Impact'>Impact</option>
        <option value='American Typewriter'>American Typewriter</option>
        <option value='Didot'>Didot</option>
        <option value='Courier'>Courier</option>
        <option value='Monaco'>Monaco</option>
        <option value='Bradley Hand'>Bradley Hand</option>
        <option value='Brush Script MT'>Brush Script MT</option>
        <option value='Luminari'>Luminari</option>
    </select>
</div>

<style lang='scss'>
    .selected {
        color: white;
        background-color:rgb(94, 111, 190);
        box-shadow: inset 2px 2px 3px rgb(56, 56, 56);
    }

    button {
        box-shadow: 2px 2px 3px rgb(75, 75, 75);
    }

    button:active {
		position: relative;
		top: 2px;
		left: 2px;
        background-color:rgb(94, 111, 190);
		box-shadow: inset 2px 2px 2px rgb(48, 48, 48);
	}
</style>