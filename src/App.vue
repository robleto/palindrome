<template>
  <section :style="image" class="image">
    
    <h3>{{this.todaysDate}}</h3>

    <!-- Is a Palindrome -->
    <div v-for="palindrome in palindromes" v-bind:key="palindrome.date">
      <div v-if="palindrome.date == this.currentDate">
        <h1>{{palindrome.display}}</h1>
        <h2>Today is a palindrome <span class="style-disclaimer" v-if="palindrome.style=='DMY'"> <br />(in the Day-Month-Year style)</span>
        </h2>
      </div>
    </div>

    <!-- Is NOT a Palindrome -->
    <div v-if="isPalindrome == 0">
        <h1>{{this.noDisplayDate}}</h1>
        <h2>Today is NOT a palindrome</h2>
    </div>

  </section>
</template>

<script>
import moment from 'moment'
export default {

  data() { 
    return {
      //MDY palindromes
      palindromes: [
        //{date: '2022-01-21', name: 'Feburary 10, 2001', digits:'8', style:'DMY', display:'10-02-2001'},
        {date: '2001-02-10', name: 'Feburary 10, 2001', digits:'8', style:'DMY', display:'10-02-2001'},
        {date: '2002-02-20', name: 'Feburary 20, 2002', digits:'8', style:'DMY', display:'20-02-2002'},
        {date: '2001-10-02', name: 'October 2, 2001', digits:'8', style:'MDY', display:'10-02-2001'},  
        {date: '2010-01-02', name: 'January 2, 2010', digits:'8', style:'MDY', display:'01-02-2010'},
        {date: '2010-02-10', name: 'Feburary 10, 2010', digits:'8', style:'DMY', display:'10-02-2010'},  
        {date: '2011-01-10', name: 'January 10, 2011', digits:'8', style:'MDY', display:'1-10-2011'}, 
        {date: '2011-02-11', name: 'Feburary 11, 2011', digits:'8', style:'DMY', display:'11-02-2011'}, 
        {date: '2011-10-01', name: 'October 1, 2011', digits:'7', style:'DMY', display:'1-10-2011'}, 
        {date: '2011-11-02', name: 'November 02, 2011', digits:'8', style:'MDY', display:'11-02-2011'},  
        {date: '2012-02-10', name: 'February 10, 2012', digits:'7', style:'MDY', display:'2-10-2012'}, 
        {date: '2012-02-21', name: 'Feburary 21, 2012', digits:'8', style:'DMY', display:'21-02-2012'},
        {date: '2012-10-02', name: 'October 2, 2012', digits:'7', style:'DMY', display:'2-10-2012'}, 
        {date: '2013-03-10', name: 'March 10, 2013', digits:'7', style:'MDY', display:'3-10-2013'}, 
        {date: '2013-10-03', name: 'October 3, 2013', digits:'7', style:'DMY', display:'3-10-2013'},
        {date: '2014-10-04', name: 'October 4, 2014', digits:'7', style:'DMY', display:'4-10-2014'},
        {date: '2015-10-05', name: 'October 5, 2015', digits:'7', style:'DMY', display:'5-10-2015'},
        {date: '2016-10-06', name: 'October 6, 2016', digits:'7', style:'DMY', display:'6-10-2016'},
        {date: '2017-10-07', name: 'October 7, 2017', digits:'7', style:'DMY', display:'7-10-2017'},
        {date: '2018-10-08', name: 'October 8, 2018', digits:'7', style:'DMY', display:'8-10-2018'},
        {date: '2019-10-09', name: 'October 9, 2019', digits:'7', style:'DMY', display:'9-10-2019'}, 
        {date: '2014-04-10', name: 'April 10, 2014', digits:'7', style:'MDY', display:'4-10-2014'}, 
        {date: '2014-10-04', name: 'October 4, 2014', digits:'7', style:'DMY', display:'4-10-2014'},
        {date: '2015-05-10', name: 'May 10, 2015', digits:'7', style:'MDY', display:'5-10-2015'}, 
        {date: '2015-10-05', name: 'October 5, 2015', digits:'7', style:'DMY', display:'5-10-2015'}, 
        {date: '2016-06-10', name: 'June 10, 2016', digits:'7', style:'MDY', display:'6-10-2016'}, 
        {date: '2016-10-06', name: 'October 6, 2016', digits:'7', style:'DMY', display:'6-10-2016'},
        {date: '2017-07-10', name: 'July 10, 2017', digits:'7', style:'MDY', display:'7-10-2017'}, 
        {date: '2017-10-07', name: 'October 7, 2017', digits:'7', style:'DMY', display:'7-10-2017'},
        {date: '2018-08-10', name: 'August 10, 2018', digits:'7', style:'MDY', display:'8-10-2018'}, 
        {date: '2018-10-08', name: 'October 8, 2018', digits:'7', style:'DMY', display:'8-10-2018'},
        {date: '2019-09-10', name: 'September 10, 2019', digits:'7', style:'MDY', display:'9-10-2019'}, 
        {date: '2019-10-09', name: 'October 9, 2019', digits:'7', style:'DMY', display:'9-10-2019'},
        {date: '2020-02-02', name: 'February 2, 2020', digits:'8', style:'MDYDMY', display:'02-02-2020'}, 
        {date: '2021-01-21', name: 'January 20, 2021', digits:'7', style:'MDY', display:'1-20-2021'}, 
        {date: '2021-02-12', name: 'Feburary 12, 2021', digits:'8', style:'DMY', display:'12-02-2021'},
        {date: '2022-12-02', name: 'December 2, 2021', digits:'8', style:'MDY', display:'12-02-2021'}, 
        {date: '2022-02-20', name: 'Febuary 20, 2022', digits:'7', style:'MDY', display:'2-20-2022'}, 
        {date: '2022-02-22', name: 'Feburary 22, 2022', digits:'8', style:'DMY', display:'22-02-2022'},
        {date: '2023-03-20', name: 'March 20, 2023', digits:'7', style:'MDY', display:'3-20-2023'}, 
        {date: '2024-04-20', name: 'April 20, 2024', digits:'7', style:'MDY', display:'4-20-2024'}, 
        {date: '2025-05-20', name: 'May 20, 2025', digits:'7', style:'MDY', display:'5-20-2025'}, 
        {date: '2026-06-20', name: 'June 20, 2026', digits:'7', style:'MDY', display:'6-20-2026'}, 
        {date: '2027-07-20', name: 'July 20, 2024', digits:'7', style:'MDY', display:'7-20-2027'}, 
        {date: '2028-08-20', name: 'August 20, 2028', digits:'7', style:'MDY', display:'8-20-2028'}, 
        {date: '2029-09-20', name: 'September 20, 2029', digits:'7', style:'MDY', display:'9-20-2029'}, 
        {date: '2030-02-03', name: 'Feburary 03, 2030', digits:'8', style:'DMY', display:'03-02-2030'},
        {date: '2030-03-02', name: 'March 02, 2030', digits:'8', style:'MDY', display:'03-02-2030'}, 
        {date: '2031-01-30', name: 'January 30, 2031', digits:'7', style:'MDY', display:'1-30-2031'}, 
        {date: '2031-02-13', name: 'Feburary 13, 2031', digits:'8', style:'DMY', display:'13-02-2031'},
        {date: '2032-02-23', name: 'Feburary 23, 2032', digits:'8', style:'DMY', display:'23-02-2032'},
        {date: '2033-03-30', name: 'March 30, 2033', digits:'7', style:'MDY', display:'3-30-2033'}, 
        {date: '2034-04-30', name: 'April 30, 2034', digits:'7', style:'MDY', display:'4-30-2034'}, 
        {date: '2035-05-30', name: 'May 30, 2035', digits:'7', style:'MDY', display:'5-30-2035'}, 
        {date: '2036-06-30', name: 'June 30, 2036', digits:'7', style:'MDY', display:'6-30-2036'}, 
        {date: '2037-07-30', name: 'July 30, 2037', digits:'7', style:'MDY', display:'7-30-2037'}, 
        {date: '2038-08-30', name: 'August 30, 2038', digits:'7', style:'MDY', display:'8-30-2038'}, 
        {date: '2039-09-30', name: 'September 30, 2039', digits:'7', style:'MDY', display:'9-30-2039'}, 
        {date: '2040-02-04', name: 'Feburary 4, 2040', digits:'8', style:'DMY', display:'04-02-2040'},
        {date: '2040-04-02', name: 'April 02, 2040', digits:'8', style:'MDY', display:'04-02-2040'},  
        {date: '2041-02-14', name: 'Feburary 14, 2041', digits:'8', style:'DMY', display:'14-02-2041'},
        {date: '2042-02-24', name: 'Feburary 24, 2042', digits:'8', style:'DMY', display:'24-02-2042'}, 
        {date: '2040-02-05', name: 'Feburary 5, 2050', digits:'8', style:'DMY', display:'05-02-2050'},
        {date: '2050-05-02', name: 'May 02, 2050', digits:'8', style:'MDY', display:'05-02-2050'},  
        {date: '2041-02-15', name: 'Feburary 15, 2051', digits:'8', style:'DMY', display:'15-02-2051'},
        {date: '2042-02-25', name: 'Feburary 25, 2052', digits:'8', style:'DMY', display:'25-02-2052'}, 
        {date: '2040-02-06', name: 'Feburary 6, 2060', digits:'8', style:'DMY', display:'06-02-2060'},
        {date: '2060-06-02', name: 'June 02, 2060', digits:'8', style:'MDY', display:'06-02-2060'},
        {date: '2061-02-16', name: 'Feburary 16, 2061', digits:'8', style:'DMY', display:'16-02-2061'},
        {date: '2062-02-26', name: 'Feburary 26, 2062', digits:'8', style:'DMY', display:'26-02-2062'}, 
        {date: '2070-02-07', name: 'Feburary 7, 2070', digits:'8', style:'DMY', display:'07-02-2070'},  
        {date: '2070-07-02', name: 'July 02, 2070', digits:'8', style:'MDY', display:'07-02-2070'},  
        {date: '2071-02-17', name: 'Feburary 17, 2071', digits:'8', style:'DMY', display:'17-02-2071'},
        {date: '2072-02-27', name: 'Feburary 27, 2072', digits:'8', style:'DMY', display:'27-02-2072'}, 
        {date: '2080-02-08', name: 'Feburary 8, 2080', digits:'8', style:'DMY', display:'08-02-2080'}, 
        {date: '2080-08-02', name: 'August 02, 2080', digits:'8', style:'MDY', display:'08-02-2080'},  
        {date: '2081-02-18', name: 'Feburary 18, 2081', digits:'8', style:'DMY', display:'18-02-2081'},
        {date: '2082-02-28', name: 'Feburary 28, 2082', digits:'8', style:'DMY', display:'28-02-2082'}, 
        {date: '2090-02-09', name: 'Feburary 9, 2090', digits:'8', style:'DMY', display:'09-02-2090'}, 
        {date: '2090-09-02', name: 'September 02, 2090', digits:'8', style:'MDY', display:'09-02-2090'}, 
        {date: '2091-02-19', name: 'Feburary 19, 2091', digits:'8', style:'DMY', display:'19-02-2091'},
        {date: '2092-02-29', name: 'Feburary 29, 2092', digits:'8', style:'DMY', display:'29-02-2092'},
      ]
    }
  },

  computed: {

    todaysDate() {
      return moment().format('MMMM Do YYYY')
    },   
    noDisplayDate() {
      return moment().format('MM-DD-YYYY')
    },    
    currentDate() {
      return moment().format('YYYY-MM-DD')
    },
  
    isPalindrome() {
      let todayPalindrome = this.palindromes.filter((palindrome) => {
        return (palindrome.date == this.currentDate) 
      })
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
  border: solid 3px #333;
  opacity: 0.8;
  color: #333333;
}
h1 {
  font-size: 300%;
  margin: 0px;
}
h2 {
  font-size: 200%;
  margin: 0px 0px 20px 0px;
}
h3 {
  font-size: 170%;
  font-style: italic;
  font-family: Georgia, serif;
  font-weight: 400;
  border-bottom: dotted 1px #999;
  padding-bottom: 1rem
}
.style-disclaimer {
  font-style: italic;
  font-size: 70%;
  font-weight: 400;
}
.result {
  display:none;
}
.result:first-child {
  display: block;
}
</style>
