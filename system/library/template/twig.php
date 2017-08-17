<?php
namespace Template;

final class Twig
{
    private $twig;
    private $data = array();
    
    public function __construct()
    {
        // include and register Twig auto-loader
        include_once(DIR_SYSTEM . 'library/template/Twig/Autoloader.php');
        
        \Twig_Autoloader::register();
    }
    
    public function set($key, $value)
    {
        $this->data[$key] = $value;
    }
    
    public function render($template, $cache = false)
    {
        //tpl compatibility
        $file = DIR_TEMPLATE . $template . '.tpl';

        if (is_file($file)) {
            extract($this->data);

            ob_start();

            require($file);

            return ob_get_clean();
        }
        // specify where to look for templates
        $loader = new \Twig_Loader_Filesystem(DIR_TEMPLATE);

        // initialize Twig environment
        $config = array('autoescape' => false);

        if ($cache) {
            $config['cache'] = DIR_CACHE;
        }

        $this->twig = new \Twig_Environment($loader, $config);
        
        try {
            // load template
            $template = $this->twig->loadTemplate($template . '.twig');
            
            return $template->render($this->data);
        } catch (Exception $e) {
            trigger_error('Error: Could not load template ' . $template . '!');
            exit();
        }
    }
}
