<script>
import { layout } from '../../stores/stores.js';

export const changeLineLength = () => {
    if ($layout.lineLength === 'line-short') {
        $layout.lineLength = 'line-long';
    } else {$layout.lineLength = 'line-short'}
}

export const changeTextBackground = () => {
    if ($layout.backgroundStyle === 'overlay-solid') {
        $layout.backgroundStyle = 'overlay-fade';
    } else if ($layout.backgroundStyle === 'overlay-fade') {
        $layout.backgroundStyle = 'overlay-solid-top';
    }
    
    else {$layout.backgroundStyle = 'overlay-solid'}
}
</script>

<button on:click="{changeLineLength}">line length</button>
<button on:click="{changeTextBackground}">text background</button>