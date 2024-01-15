<script setup>
import starImage from "../assets/star.png";
</script>

<template>
  <h1 class="text-purple-600">Responsive Layout</h1>
  <!-- bagian atas -->
  <div class="flex flex-col gap-y-2 bg-black py-2">
    <div class="bg-blue-900 text-white text-center">1</div>
    <div class="flex gap-x-2 flex-col sm:flex-row gap-y-2">
      <div class="flex-1 bg-blue-900 text-white text-center">2</div>
      <div class="flex-1 bg-blue-900 text-white text-center">3</div>
    </div>
    <div class="flex flex-col gap-y-2 sm:flex-row justify-between gap-x-2">
      <div class="left-side flex-1 flex flex-col justify-between">
        <div class="top-left">
          <div class="w-full h-[200px] bg-blue-900 flex items-center p-2">
            <div class="bg-black flex-1 h-[80%] relative">
              <div
                class="bg-red-600 flex-1 text-white flex items-center justify-center absolute inset-[10px]"
              >
                4
              </div>
            </div>
          </div>
        </div>
        <div
          class="bottom-left flex justify-evenly sm:justify-between gap-x-2 my-2 sm:m-0"
        >
          <div
            class="flex-1 bg-blue-900 text-white flex items-center justify-center h-[35px]"
          >
            5
          </div>
          <div
            class="flex-1 bg-blue-900 text-white flex items-center justify-center h-[35px]"
          >
            6
          </div>
          <div
            class="flex-1 bg-blue-900 text-white flex items-center justify-center h-[35px]"
          >
            7
          </div>
        </div>
      </div>
      <div class="right-side flex-1">
        <div class="bg-blue-900 h-full flex gap-x-5 sm:flex-col gap-y-2 p-2">
          <div class="bg-black h-[70px] w-[50%] sm:w-full relative">
            <div
              class="bg-red-600 h-[50px] text-white flex items-center justify-center bg-clip-padding absolute inset-[10px]"
            >
              8
            </div>
          </div>
          <div class="bg-black h-[70px] w-[50%] sm:w-full relative">
            <div
              class="bg-red-600 h-[50px] text-white flex items-center justify-center absolute inset-[10px]"
            >
              9
            </div>
          </div>
          <div class="bg-black h-[70px] w-[50%] sm:w-full relative">
            <div
              class="bg-red-600 h-[50px] text-white flex items-center justify-center absolute inset-[10px]"
            >
              10
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- bagian bawah -->
  <div class="hidden sm:block">
    <div class="bottom-hidden-left-side bg-blue-900 relative h-[100px] w-[50%]">
      <div class="bg-red-600 w-[100px] h-[40px] z-0 top-[0px]"></div>
      <div
        class="bg-white w-[50px] h-[75px] z-10 absolute left-[30px] top-[10px]"
      ></div>
      <div
        class="bg-red-600 w-[100px] h-[40px] z-20 absolute left-[50px] bottom-[0px]"
      ></div>
      <div
        class="bg-red-600 w-[100px] h-[40px] z-0 top-[0px] right-[-50px] absolute"
      ></div>
      <div
        class="bg-red-600 w-[100px] h-[40px] z-0 bottom-[0px] right-[-50%] absolute"
      ></div>
      <img
        :src="starImage"
        class="w-12 h-12 top-[0px] right-[-100%] absolute pr-2 pt-2"
      />
    </div>
  </div>
</template>

<style scoped></style>
