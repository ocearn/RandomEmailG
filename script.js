// র্যান্ডম ফার্স্ট নামের লিস্ট
const firstNames = ["Karim Hassan", "Jamal Rashed", "Kamal Ahmed", "Samiul Rahman", "Tanim Khan",
"Shakil Hossain", "Alim Chowdhury", "Rafiul Islam", "Zubair Ali", "Rakib Uddin",
"Imran Mahmud", "Farhan Akhtar", "Sakib Ahmed", "Iqbal Mollah", "Mahir Riaz",
"Faisal Chowdhury", "Nabil Rahman", "Sazzad Hossain", "Ashraf Alam", "Sharif Abdullah",
"Mehedi Hasan", "Anwar Hossain", "Nazim Uddin", "Rezaul Karim", "Mahmudur Rahman",
"Shuvo Islam", "Nayeem Hossain", "Riyad Chowdhury", "Shimul Ahmed", "Milon Mia",
"Arafat Ali", "Jubair Rahman", "Shihab Hossain", "Nashit Ahmed", "Tariq Islam",
"Hasan Uddin", "Siddiq Ali", "Ratul Ahmed", "Ruhul Amin", "Arif Rahman",
"Liton Ali", "Mamun Mollah", "Sujon Chowdhury", "Rony Ahmed", "Kawsar Uddin",
"Rashed Islam", "Mousa Hossain", "Anis Rahman", "Rasel Ahmed", "Mizan Uddin",
"Zubair Mollah", "Rashedul Islam", "Sabbir Ahmed", "Shoriful Islam", "Rahman Chowdhury",
"Ahsan Ali", "Bappi Uddin", "Sujon Rahman", "Bishal Chowdhury", "Safiul Islam",
"Fahim Mollah", "Rifatul Rahman", "Arman Uddin", "Kamran Ali", "Khalid Rahman",
"Ravi Mollah", "Anwarul Islam", "Osman Hossain", "Irfan Ali", "Imtiaz Ahmed",
"Rahat Rahman", "Sabbirul Islam", "Tawhidul Ali", "Sahidul Chowdhury", "Sultan Rahman",
"Suman Ali", "Fahim Uddin", "Sumon Islam", "Shahadat Hossain", "Zubayer Ali",
"Nashir Uddin", "Ruhin Ahmed", "Shahina Rahman", "Mokles Ali", "Mominul Hossain",
"Zulfiqar Ahmed", "Omar Ali", "Majed Rahman", "Mojibur Chowdhury", "Ruhan Ali",
"Liton Uddin", "Rashid Rahman", "Ali Hossain", "Meher Ali", "Moshiur Rahman",
"Tanvir Uddin", "Babu Ahmed", "Sakeeb Ali", "Habibur Rahman", "Foysal Chowdhury",
"Mokarom Ali", "Shahriar Hossain", "Fazlul Rahman", "Suhail Ahmed", "Jasim Ali",
"Shanto Uddin", "Maruf Islam", "Bodhisattwa Ali", "Sushanto Rahman", "Ibrar Ahmed",
"Ehsan Ali", "Shamsher Uddin", "Hossain Mollah", "Alomgir Rahman", "Nashit Ali",
"Ruhul Rahman", "Zahid Hossain", "Akash Uddin", "Saber Ahmed",

"Nusrat Khatun", "Rima Akter", "Sultana Begum", "Fariha Sultana", "Jannat Ara",
"Nazia Sultana", "Shahina Begum", "Mohsina Akter", "Rupali Begum", "Nusrat Jahan",
"Sofia Sultana", "Sabrina Akter", "Sharmeen Sultana", "Shahnaz Begum", "Soma Akter",
"Farzana Akter", "Shaila Khatun", "Madhumita Saha", "Rima Begum", "Tazrina Akter",
"Shaila Khatun", "Mili Akter", "Farzana Khatun", "Kazi Jannat", "Shaista Sultana",
"Anika Khatun", "Selina Begum", "Muktara Khatun", "Sadia Akter", "Khokon Khatun",
"Nafisa Sultana", "Sumaiya Akter", "Meem Akter", "Tanzina Khatun", "Shahidul Akter",
"Nishat Sultana", "Rumana Begum", "Tanvirah Sultana", "Shamima Begum", "Mushfika Khatun",
"Meherun Nisa", "Raisa Sultana", "Rasha Begum", "Mariya Sultana", "Shirin Akter",
"Momena Khatun", "Kumkum Akter", "Sheba Begum", "Rukaiya Sultana", "Anushka Akter",
"Sohana Khatun", "Dilruba Begum", "Tashfiya Khatun", "Shahrin Akter", "Afreen Sultana",
"Mushfika Begum", "Rifat Sultana", "Liza Akter", "Madhuri Begum", "Afsana Khatun",
"Riyama Sultana", "Sanjida Khatun"];

// পাসওয়ার্ড জেনারেটর ফাংশন
function generatePassword(length = 12) {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$!&";
    let password = "";
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
}

// ইউনিক ইমেইল তৈরি করার জন্য ফাংশন (প্রথমে অক্ষর, তারপর সংখ্যা)
function generateUniqueEmail() {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    
    // অক্ষরের জন্য মিনিমাম ৫, ম্যাক্সিমাম ৭টি
    const letterCount = Math.floor(Math.random() * (7 - 5 + 1)) + 5; 
    // সংখ্যার জন্য মিনিমাম ২, ম্যাক্সিমাম ৫টি
    const numberCount = Math.floor(Math.random() * (5 - 3 + 1)) + 2; 
    
    let randomLetters = "";
    let randomNumbers = "";

    // প্রথমে অক্ষর তৈরি করা হচ্ছে
    for (let i = 0; i < letterCount; i++) {
        randomLetters += letters.charAt(Math.floor(Math.random() * letters.length));
    }

    // এরপর সংখ্যা তৈরি করা হচ্ছে
    for (let i = 0; i < numberCount; i++) {
        randomNumbers += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }

    let uniqueEmail = randomLetters + randomNumbers; // শুধুমাত্র প্রথম অংশ (অক্ষর ও সংখ্যা)
    
    // যদি HTML-এ `randomEmail` আইডি থাকে, তাহলে সেটার মান পরিবর্তন হবে
    let emailField = document.getElementById("randomEmail");
    if (emailField) {
        emailField.value = uniqueEmail;
    }

    return uniqueEmail;
}

// ফাংশন কল করার জন্য একটি ইভেন্ট লিসনার (যদি বাটন থাকে)
document.getElementById("generateButton").addEventListener("click", function() {
    generateUniqueEmail();
});

// ইউনিক ইউজারনেম, ইমেইল ও পাসওয়ার্ড তৈরি
function generateRandomData() {
    // র‍্যান্ডম ফার্স্ট নেম বাছাই
    let firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    let username = firstName; // শুধুমাত্র ফার্স্ট নেম ইউজারনেম হিসেবে ব্যবহার করা হবে

    // র‍্যান্ডম ইমেইল তৈরি
    let email = generateUniqueEmail(); // এখানে ইউনিক ইমেইল জেনারেট করা হচ্ছে

    // স্ট্রং পাসওয়ার্ড জেনারেট
    let password = generatePassword(9);

    // ইনপুট ফিল্ডে দেখানো
    document.getElementById("randomName").value = username;
    document.getElementById("randomEmail").value = email;
    document.getElementById("randomPassword").value = password;
}

// কপি ফাংশন
function copyText(id, btn) {
    let input = document.getElementById(id);

    // কপি করার জন্য navigator.clipboard ব্যবহার করা
    navigator.clipboard.writeText(input.value).then(() => {
        btn.innerHTML = '<i class="fa-solid fa-check"></i>';
        btn.classList.add("copied");

        setTimeout(() => {
            btn.innerHTML = '<i class="fa-solid fa-copy"></i>';
            btn.classList.remove("copied");
        }, 2000);
    }).catch((err) => {
        console.error("Failed to copy text: ", err);
    });
      }
