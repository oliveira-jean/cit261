 update = new Date(document.lastModified)
            theMonth = update.getMonth() + 1
            theDate = update.getDate()
            theYear = update.getFullYear()
            d = "<I>Last updated:" + theMonth + "/" + theDate + "/" + theYear + "</I>"
            document.getElementById("lastupdate").innerHTML = d
