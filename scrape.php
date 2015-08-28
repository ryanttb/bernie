<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>Scrape | BERNIE</title>
    <meta name="description" content="BERNIE helps with better URN creation via source URLs">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="apple-touch-icon" href="apple-touch-icon.png">
    <!-- Place favicon.ico in the root directory -->

    <link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap-theme.min.css">
    <link rel="stylesheet" href="css/index.css">
  </head>
  <body>
    <div class="jumbotron">
      <div class="container">
        <h1>BERNIE</h1>
        <p>BERNIE helps with better URN creation via source URLs</p>
        <p>Grab that bull by the horns!</p>
      </div>
    </div>

    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
        </div>

        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="index.html"><img alt="Brand" src="img/buddy.png"></a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li><a href="index.html">Create</a></li>
            <li class="active"><a href="scrape.php">Scrape<span class="sr-only">(current)</span></a></li>
          </ul>
        </div><!-- /.navbar-collapse -->
      </div><!-- /.container-fluid -->
    </nav>

    <div class="container">
      <div id="prepare-flash" class="alert alert-warning" style="display: none;" role="alert"></div>

      <form class="form-horizontal">
        <div class="form-group">
          <label for="source" class="control-label">Source</label>
          <select name="source" id="source" class="form-control">
            <option value="" data-url="" data-selector="" selected></option>
            <option value="beck" data-url="https://beck-online-beck-de.ezp-prod1.hul.harvard.edu/default.aspx" data-selector=".content a">Beck</option>
          </select>
        </div>

        <div class="form-group">
          <label for="source-url" class="control-label">Source URL</label>
          <input type="text" id="source-url" value="" class="form-control"> 
        </div>

        <button id="go" type="submit" class="btn btn-primary">Scrape</button>

        <div class="form-group">
          <label for="urls" class="control-label" >Scraped URLs</label>
          <textarea id="urls" class="form-control" rows="6"></textarea>
        </div>

      </form>
    </div>

    <footer class="footer">
      <div class="jumbotron">
        <div class="container">
          <h2>Thank you for using BERNIE<br><small>(a Morrison~Westphal project)</small></h2>

          <small class="disclaimer">THIS SOFTWARE IS PROVIDED BY THE AUTHOR ''AS IS'' AND ANY EXPRESS OR IMPLIED WARRANTIES ARE DISCLAIMED. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.</small>
        </div>
      </div>
    </footer>
    
    <script src="bower_components/jquery/dist/jquery.min.js"></script>
    <script src="bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
    <script src="js/scrape.js"></script>
  </body>
</html>
