import React from 'react'

const Avatar = () => {
  return (
    <div class="flex w-72 p-4 max-w-lg flex-col rounded-lg bg-white shadow-sm border border-slate-200 my-6">
  <div class="flex items-center gap-4 text-slate-800">
    <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80" alt="Tania Andrew" class="relative inline-block h-[58px] w-[58px] !rounded-full  object-cover object-center" />
    <div class="flex w-full flex-col">
      <div class="flex items-center justify-between">
        <h5 class="text-xl font-semibold text-slate-800">
          Tania Andrew
        </h5>
      </div>
      <p class="text-xs uppercase font-bold text-slate-500 mt-0.5">
        Designer @ Google
      </p>
    </div>
  </div>
  <div class="mt-6">
    <p class="text-base text-slate-600 font-light leading-normal">
      &quot;I found solution to all my design needs from Creative Tim. I use
      them as a freelancer in my hobby projects for fun! And its really
      affordable, very humble guys !!!&quot;
    </p>
  </div>
</div>   
  )
}

export default Avatar