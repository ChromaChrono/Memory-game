<template>
    <div class="carasoul-screen">
        <div class="carasoul">
            <div class="carasoul-card">
                <div class="carasoul-word">Grapefruit</div>
            </div>
            <div class="carasoul-card"></div>
            <div class="carasoul-card"></div>
            <div class="carasoul-card"></div>
            <div class="carasoul-card"></div>
            <div class="carasoul-card"></div>
        </div>
    </div>
</template>

<style lang="css" scoped>
.carasoul {
    display: flex;
    position: absolute;
    padding: 0 3rem;
    top: 50%;
    transform: translate(0, -50%);
}
.carasoul-card {
    background: white;
    width: 21rem;
    height: 16rem;
    flex-grow: 0;
    border-radius: 1rem;
    display: grid;
    place-items: center;
}
.carasoul-word {
    font-size: 2rem;
    color: black;
}
.carasoul-card:not(:first-child) {
    margin-left: 3rem;
}
.carasoul-screen {
    height: 100vh;
    width: 100vw;
}
</style>