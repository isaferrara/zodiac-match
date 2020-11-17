
      if (navigator.geolocation) {
      // Get current position
      // The permissions dialog will pop up
      navigator.geolocation.getCurrentPosition(function (position) {
        // Create an object to match Mapbox's Lat-Lng array format
        const center = [
          position.coords.longitude,
          position.coords.latitude,
        ];
        console.log('center: ', center)
        // User granted permission
        // Center the map in the position we got
      }, function () {
        // If something goes wrong
        console.log('Error in the geolocation service.');
      });
    } else {
      // Browser says: Nah! I do not support this.
      console.log('Browser does not support geolocation.');
    }

