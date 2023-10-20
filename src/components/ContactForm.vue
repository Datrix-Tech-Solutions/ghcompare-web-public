<script setup></script>

<template>
    <form class="">
        <!-- Name -->
        <div class=" mb-3">
            <input type="text" class="w-full" name="name" required placeholder="Name *">
        </div>

        <!-- Email and  Phone -->
        <div class="flex gap-5 justify-between mb-3">
            <!-- Email -->
            <div class="w-1/2">
                <input type="email" name="email" id="email" class="w-full" placeholder="Email *" required>

            </div>
            <!-- Phone -->
            <div class="w-1/2">
                <input type="number" name="phone" id="phone" class="w-full" placeholder="Phone">
            </div>
        </div>

        <!-- Message -->
        <div class=" mb-3">
            <textarea name="message" id="message" class="w-full" rows="8" placeholder="Message *"></textarea>
        </div>
    </form>
</template>