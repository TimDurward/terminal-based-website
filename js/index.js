
var commandText = function(text){
  return "[[g;#EEEEEE;]" + text + "]";
}

var titleText = function(text){
  return "[[u;inherit;]" + text + "]";
}


var App = {
  intro: function(ret){
    if (typeof ret === 'undefined') ret = false;
    var greetText = 
      "####################################################################################\n"+
      "|[[b;#00DE12;]\t\t  _______ _             _____                                   _  ]\t   |\n"+
      "|[[b;#00DE12;]\t\t |__   __(_)           |  __ \\                                 | |]\t    |\n"+
      "|[[b;#00DE12;]\t\t    | |   _ _ __ ___   | |  | |_   _ _ ____      ____ _ _ __ __| |]\t    |\n"+
      "|[[b;#00DE12;]\t\t    | |  | | '_ ` _ \\  | |  | | | | | '__\\ \\ /\\ / / _` | '__/ _` |]\t    |\n"+
      "|[[b;#00DE12;]\t\t    | |  | | | | | | | | |__| | |_| | |   \\ V  V / (_| | | | (_| |]\t    |\n"+
      "|[[b;#00DE12;]\t\t    |_|  |_|_| |_| |_| |_____/ \\__,_|_|    \\_/\\_/ \\__,_|_|  \\__,_|]\t\t|\n"+
      "|\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  |\n"+
      "|\t\tHi, I'm " + commandText('Timothy Durward') + " - Jr. Developer in Portland, OR.\t\t\t\t  |\n"+
      "|\t\tPlease type " +commandText('ls')+" or " +commandText('help')+ " for a list of commands.    \t\t\t\t\t\t|\n"+
      "|\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t  |\n"+
      "####################################################################################\n";
    if (!ret) {
        this.echo("\n" + greetText);
    } else {
        return greetText;
    }
  },
  ls: function(){
    this.exec('menu');
  },
  rm: function(command){
    this.echo();
    this.echo("|  Oh no!! don't delete that!");  
    this.echo();
  },
  cd: function(command){
    if(command){
      this.exec(command);  
    }else{
      this.echo("|  directory is not selected.");
    }
  },
  find: function(command){
    if(command){
      this.exec(command);  
    }else{
      this.echo("|  Please enter what you are looking for.");
    }
  },
  grep: function(command){
    if(command){
      this.exec(command);  
    }else{
      this.echo("|  Please enter what you are looking for.");
    }
  },
  help: function(){
    this.exec('menu');
  },
  menu: function(){
    this.echo();
    this.echo("|  " + commandText("about") + "              - Summary of me");
    this.echo("|  " + commandText("work") + "               - My Professional Experience");
    this.echo("|  " + commandText("projects") + "           - Recent projects of mine");
    this.echo("|  " + commandText("skills") + "             - What I can do");
    this.echo("|");
    this.echo("|  " + commandText("social") + "             - My Social Status");
    this.echo("|  " + commandText("contact") + "            - Contact me")
    this.echo("|");
    this.echo("|  " + commandText("resume") + "           - View my Resume (pdf) ");
    this.echo("|  " + commandText("all") + "                - [[b;#00DE12;]Run all commands (recommended)]");
    this.echo();
  },
  social: function(){
    this.echo();
    this.echo("|  " + commandText("GitHub") + ":       http://github.com/timdurward");
    this.echo("|  " + commandText("LinkedIn") + ":     https://linkedin.com/in/timdurward");
    this.echo("|  " + commandText("Twitter") + ":      https://twitter.com/DurwardTimothy");
    this.echo();
  },
  github: function(){
    this.echo();
    this.echo("|  http://github.com/timdurward");
    this.echo();
  },

  facebook: function(){
    this.echo();
    this.echo("|  https://facebook.com/timothydurward");
    this.echo();
  },

  linkedin: function(){
    this.echo();
    this.echo("|  https://linkedin.com/in/timdurward");
    this.echo();
  },

  twitter: function(){
    this.echo();
    this.echo("|  https://twitter.com/DurwardTimothy");
    this.echo();
  },
  exp: function(){
    this.exec('work');
  },
  works: function(){
    this.exec('work');
  },
  work: function(){
    this.echo();
    this.echo("|  " + commandText('Computer Technician') + "                             at " + commandText("M. Sass") + "\n|  July 2014 - January 2016");
    this.echo("|");
    this.echo("|    I was in charge of potential purchases of electronic inventory, analysis of profit, full\n" + "|    refurbishment of laptops and hand­held devices, technical related customer questions,\n" + "|    and safe/secure packaging. Before resigning, I trained two technicians to manage and\n" + "|    assist the refurbish process.");
    this.echo("|");
    this.echo("|    Accompishments");
    this.echo("|");
    this.echo("|    • Obtained Microsoft Certification (MAR).");
    this.echo("|    • Helped open a Computer Department for M. Sass.");
    this.echo("|    • Promoted to Lead Technician.");
    this.echo("|    • Increased Company Revenue by 35%.");
    this.echo("|");
    this.echo("|  " + commandText('Staff Manager, Property Manager') + "            at " + commandText("Sky Lake Lodge") + "\n|  December 2012 - June 2014");
    this.echo("|");
    this.echo("|    I managed finances, staff, and the upkeep of the property, in addition to being in charge of\n" + "|    city taxes, transient occupancy taxes and monthly reports of revenue. I also dealt with\n" + "|    occasional evictions and court­hearings for evicted residents.");
    this.echo("|");
    this.echo("|    Accompishments");
    this.echo("|");
    this.echo("|    •  Implemented a new telephone­system, diverging from old landline technology to VOIP.");
    this.echo("|    •  Developed a bookkeeping application using MS Access connected to MySQL using ODBC.");
    this.echo("|    •  Redesigned Sky Lake Lodge’s Website.");
    this.echo("|");
  },
  whoami: function(){
    this.exec('about');
  },
  about: function(){
    this.echo();
    this.echo("|  Name:         " + commandText('Timothy Durward'));
    this.echo("|");
    this.echo("|  Summary:      I am a Jr. Developer (primarily " + commandText('.Net') + ", " + commandText('NodeJs') + ") and \n|                develop real-world apps as an interest.");
    this.echo("|                I am a student at " + commandText('Epicodus')+" learning \n|                "+commandText('C#')+" and "+commandText('.NET')+".");
    this.echo("|                I also do my fair share of front end development using technologies \n|                such as " + commandText('Angular') + " and " + commandText('Ember'));
    this.echo("|");
    this.echo("|  Employment:   I am currently doing " + commandText("remote internship") + " in the " + commandText("Portland") + " area. \n|                Get in touch if you'd like to discuss a proposal!");
    this.echo();
  },
  project: function(){
    this.exec('projects');
  },
  projects: function(){
    this.echo("|    Come back soon."); 
  },
  skill: function(){
    this.exec('skills');
  },
  skills: function(){
    this.echo("|");
    this.echo("|  [[g;#B2D100;]Web Back-End] ");
    this.echo("|  " + commandText('Nancy w/ Kestrel') + "       ##[[g;#5BD100;]############################################]       ##");
    this.echo("|  " + commandText('Ember w/ Ember Server') + "  ##[[g;#B2D100;]#######################################]            ##");
    this.echo("|");
    this.echo("|  [[g;#B2D100;]Web Front-End] ");
    this.echo("|  " + commandText('Javascript') + "             ##[[g;#5BD100;]############################################]       ##");
    this.echo("|  " + commandText('CSS / SASS') + "             ##[[g;#B2D100;]#######################################]            ##");
    this.echo("|  " + commandText('HTML5') + "                  ##[[g;#B2D100;]#######################################]            ##");
    this.echo("|");
    this.echo("|  [[g;#B2D100;]Database] ");
    this.echo("|  " + commandText('T-SQL') + "                  ##[[g;#B2D100;]##############################]                     ##");
    this.echo("|  " + commandText('MS-SQL') + "                 ##[[g;#D1B900;]#########################]                          ##");
    this.echo("|");
    this.echo("|  [[g;#B2D100;]Software] ");
    this.echo("|  " + commandText('C#') + "                     ##[[g;#D1B900;]#########################]                          ##");
    this.echo("|  " + commandText('.NET') + "                   ##[[g;#D13F00;]####]                                               ##");
    this.echo("|  " + commandText('Python') + "                 ##[[g;#D13F00;]#]                                                  ##");
    this.echo("|");
    this.echo("|  [[g;#B2D100;]ETC] ");
    this.echo("|  " + commandText('Ubuntu Linux') + "           ##[[g;#B2D100;]#############################]                      ##");
    this.echo("|  " + commandText('Arduino') + "                ##[[g;#D1B900;]#######################]                            ##");
    this.echo("|  " + commandText('Heroku') + "                 ##[[g;#D1B900;]##########]                                         ##");
    this.echo("|  " + commandText('AWS') + "                    ##[[g;#D13F00;]#########]                                          ##");
    this.echo();
  },
  contact: function(){
    this.echo();
    this.echo("|  " + commandText("Email") + ":         timothy.a.durward@gmail.com");
    this.echo("|  " + commandText("Phone") + ":         (408) 386 2152");
    this.echo();
  },
  credit: function(){
    this.exec('credits');
  },
  credits: function(){
    this.echo();
    this.echo("|  Site built by " + commandText('Timothy Durward'));
    this.echo();
  },
  award: function(){
    this.exec('awards');
  },    
  resume: function(){
    window.location.href = "./tim.pdf";
  },
  cls: function(){
    this.clear();
  },
  clear: function(){
    this.clear();
  },
  echo: function(command){
    this.echo(command);
  },
  all: function(){
    this.clear();
    this.exec('intro');
    this.exec('about');
    this.exec('work');
    this.exec('projects');
    this.exec('skills');
    this.exec('social');
    this.exec('contact');
  },
  sudo: function(){
    this.exec('login');
  },
  login: function(){
    this.echo();
    this.echo("|  login function currently under development");
    this.echo();
  },
  du: function(){
    this.echo();
    this.echo("|  100%");
    this.echo();
  },
  mv: function(){
    this.echo();
    this.echo("|  dont't move!");
    this.echo();
  },
  cp: function(){
    this.echo();
    this.echo("|  dont't copy!");
    this.echo();
  },
  mkdir: function(){
    this.echo();
    this.echo("|  mkdir function currently under development");
    this.echo();
  },
}

jQuery(document).ready(function($) {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    $('body').terminal(App, {
      greetings: function(cb){
        that = this;
        cb(App.mobile());
      },

      onBlur: function() {
        // prevent loosing focus
        return false;
      },
      completion: true,
      checkArity: false
    });    
  } else {
    $('body').terminal(App, {
      greetings: function(cb){
        cb(App.intro(true));
      },

      onBlur: function() {
          // prevent loosing focus
          return false;
      },
      completion: true,
      checkArity: false
    });
  }
});