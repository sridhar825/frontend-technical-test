export default translateConfig;

function translateConfig($translateProvider) {
  $translateProvider.translations('en', {
    'text1': 'Open a chequing account',
    'text2': 'Open a savings account',
    'text3': 'Open a U.S. Dollar account',
    'text4': 'Review my everyday banking needs',
    'text5': 'Switch to TD',
    'text6': 'Apply for Overdraft Protection'
  });
 
  $translateProvider.translations('fr', {
    'text1': 'ouvrir un compte-chèques',
    'text2': 'ouvrir un compte d’épargne',
    'text3': 'ouvrir un compte en dollars US',
    'text4': 'examiner mes besoins bancaires',
    'text5': 'passer à la TD',
    'text6': 'demander une protection contre les découverts'
  });
 
  $translateProvider.preferredLanguage('en');
}