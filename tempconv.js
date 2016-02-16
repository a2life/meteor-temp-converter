if (Meteor.isClient) {
  Session.setDefault('degF',-40);
  Session.setDefault('degC',-40);

   Template.temperatureBoxes.helpers({
    degF: function(){
      return Session.get('degF');
    },
    degC: function(){
      return Session.get('degC');
    }
  });

  Template.temperatureBoxes.events({
    'keyup #c': function(e){
      if(e.which === 13) {
        var degC = e.target.value;
        var degF = Math.round(degC*9/5 + 32);
        Session.set('degF',degF);

      }
    },
    'keyup #f': function(e){
      if(e.which === 13) {
        var degF = e.target.value;
        var degC = Math.round((degF-32)* 5/9);
        Session.set('degC',degC);

      }
    }
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
