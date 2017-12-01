function doClick(e) {
	Toast = require('android.widget.Toast');  
        Toast.makeText(Ti.Android.currentActivity, "Your toast message.",Toast.LENGTH_LONG).show();
}
    var AndroidAppPkg = require('android.app.*'),
        AlertDialog = AndroidAppPkg.AlertDialog,
        Builder = AlertDialog.Builder,
        Activity = AndroidAppPkg.Activity,
        Gravity = require('android.view.Gravity'),
        //OnClickListener = require('android.content.DialogInterface.OnClickListener'),
        Toast = require('android.widget.Toast');
        
        
       // Toast.makeText(Ti.Android.currentActivity, "Your toast message.",
        //              Toast.LENGTH_LONG).show();
		//toast.setGravity(Gravity.TOP|Gravity.LEFT, 0, 0);
	//	Toast.show();
        
$.index.open();
