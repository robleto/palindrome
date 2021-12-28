<template>
  <section :style="image" class="image">
    <h1>{{ this.currentDate }}</h1>
    <h2 v-if="isPalindrome.length > 0"> Today is a palindrome!</h2>
    <h2 v-else> Today is NOT a palindrome!</h2>
  </section>
</template>

<script>
export default {

  data() { 
    return {
      currentMonth: `${new Date().getMonth()+1}`,
      currentDate: `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`,
      palindromes: [
        {date: '2001-10-02', name: 'October 2, 2001', digits:'7'}, 
        {date: '2010-01-02', name: 'January 2, 2010', digits:'8'}, 
        {date: '2011-01-10', name: 'January 10, 2011', digits:'8'},
        {date: '2011-11-02', name: 'November 02, 2011', digits:'8'},
        {date: '2012-02-10', name: 'February 10, 2012', digits:'7'},
        {date: '2013-03-10', name: 'March 10, 2013', digits:'7'},
        {date: '2014-04-10', name: 'April 10, 2014', digits:'7'},
        {date: '2015-05-10', name: 'May 10, 2015', digits:'7'},
        {date: '2016-06-10', name: 'June 10, 2016', digits:'7'},
        {date: '2017-07-10', name: 'July 10, 2017', digits:'7'},
        {date: '2018-08-10', name: 'August 10, 2018', digits:'7'},
        {date: '2019-09-10', name: 'September 10, 2019', digits:'7'},
        {date: '2020-02-02', name: 'February 2, 2020', digits:'8'},
        {date: '2021-01-20', name: 'January 20, 2021', digits:'7'},
        //{date: '2021-12-27', name: 'December 2, 2021', digits:'8'},
        {date: '2022-02-20', name: 'Febuary 20, 2022', digits:'7'}
      ]
    }
  },

  computed: {

    isPalindrome() {
      //console.log ("current date is " + this.currentDate)
      let todayPalindrome = this.palindromes

      todayPalindrome = todayPalindrome.filter((palindrome) => {
        //console.log("array of palindrome date has " + palindrome.date);
        return (palindrome.date == this.currentDate) 
      })

    //console.log(todayPalindrome)
    return todayPalindrome;
    }

    // TODO Set the Unsplash conditionally by season
    // setUnsplash() {
    //   if (this.currentMonth == (12 || 1 || 2)) {
    //     return {
    //       image: {backgroundImage: "url(https://via.placeholder.com/150)"}
    //     };
    //   }
    // }


  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  height: 100vh;
  width: 100vw;
  background: url('https://source.unsplash.com/random/?winter,outdoors,nature,dark') no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
}
section {
  margin: auto;
  padding: 10px 25px;
  display: inline-block;
  background-color: #ffffff;
  border-radius: 10px;
  opacity: 0.8;
  color: #333333;
}
h1 {
  font-size: 300%;
  margin-bottom: 20px;
}
h2 {
  font-size: 200%;
}
.result {
  display:none;
}
.result:first-child {
  display: block;
}
</style>
