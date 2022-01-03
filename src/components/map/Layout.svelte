<script>
import { layout, item, map } from '../../stores/stores.js';

const stopDragging = () => {
    $map.dragging.disable();
    $map.doubleClickZoom.disable();
}
const startDragging = () => {
    $map.dragging.enable();
    $map.doubleClickZoom.enable();
}

</script>

<div class='border-top'></div>
<div class='border-right'></div>
<div class='border-left'></div>
<div class='border-bottom'></div>
<div id= 'text-background' class={$layout.backgroundStyle} on:mouseenter="{stopDragging}" on:mouseleave="{startDragging}">
<h2 style='font-family: {$layout.fontFamily}' id='city-text' contenteditable="true" bind:innerHTML={$item.placeName}></h2>
<hr class={$layout.lineLength}>
<h3 style='font-family: {$layout.fontFamily}' id='country-text' contenteditable="true" bind:innerHTML={$item.countryName}></h3>

</div>

<style lang='scss'>

$backgroundColor: white;
$fadeColor: rgb(255, 255, 255);
$clearColor: rgba($fadeColor, 0);
$backgroundFadeBottom: linear-gradient(to top, $fadeColor, $fadeColor, 90%,$clearColor);
$backgroundFadeTop: linear-gradient(to bottom, $fadeColor, $fadeColor, 90%,$clearColor);
$mapHeight: 80%;
$borderWidth: 20px;

@mixin textBackground () {
    width: 100%;
    z-index: 999;
    position: absolute;
    bottom: 0px;
    cursor: pointer;
    height: calc($mapHeight/5.5);
}

@mixin layoutText($marginTop) {
    margin-bottom: 0;
    margin-top: $marginTop;
}

@mixin lineStyle ($lineWidth) {
    border: 1px solid black;
    border-radius: 1px;
    width: $lineWidth;
    margin: 0 auto;
}

@mixin borderStyle () {
    z-index: 999;
    position: absolute;
    background-color: $backgroundColor;
}

.border-top {
    @include borderStyle();
    width: 100%;
    top: 0px;
    height: $borderWidth;
}

.border-bottom {
    @include borderStyle();
    width: 100%;
    bottom: 0px;
    height: $borderWidth;
}

.border-right {
    @include borderStyle();
    height: 100%;
    right: 0px;
    width: $borderWidth;
}

.border-left {
    @include borderStyle();
    height: 100%;
    left: 0px;
    width: $borderWidth;
}

.overlay-solid-top {
    @include textBackground();
    background-color: $backgroundColor;
    top: 0;
    #city-text {
        @include layoutText($marginTop: 30px)
    }
}

.overlay-solid-bottom {
    @include textBackground();
    background-color: $backgroundColor;
    #city-text {
        @include layoutText($marginTop: 10px);
    }
}

.overlay-fade-bottom {
    @include textBackground();
    background-image: $backgroundFadeBottom;
    #city-text {
        @include layoutText($marginTop: 10px);
    }
}

.overlay-fade-top {
    @include textBackground();
    background-image: $backgroundFadeTop;
    top: 0;
    #city-text {
        @include layoutText($marginTop: 30px);
    }
}

#country-text {
    margin-top: 0;
}

.line-short {
    @include lineStyle($lineWidth: 60%);
}

.line-long {
    @include lineStyle($lineWidth: 80%);
}
</style>