<?php
/**
 * Plugin Name: Gutenberg demo
 * Plugin URI:  https://wppool.dev/wp-dark-mode
 * Description: gutenberg demo plugin
 * Version:     1.0.0
 * Author:      WPPOOL
 * Author URI:  http://wppool.dev
 * Text Domain: gutenberg-demo
 * Domain Path: /languages/
 * License:     GPL-2.0+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 */

/** don't call the file directly */
if ( ! defined( 'ABSPATH' ) ) {
	wp_die( __( 'You can\'t access this page', 'gutenberg-demo' ) );
}

 if ( ! class_exists( 'Gutenberg_Demo') ) {
    final class Gutenberg_Demo {
        private function __construct() {
            //first way
            // add_action('enqueue_block_editor_assets', [ $this, 'admin_assets'] );
            add_action( 'init', [ $this, 'load_admin_assets'] );
        }
        /**
         * load admin assets 2nd way
         *
         */
        public function load_admin_assets() {
           wp_register_script( 'gutenberg_demo', plugin_dir_url( __FILE__ ).'assets/block.js', [ 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ], time(), true );
            //for php output replace by javascript save
            register_block_type( 'gutenberg-demo-blog/gutenberg-demo', [
                'editor_script' => 'gutenberg_demo',
                // 'editor_style'  => 'wp-dark-mode-editor-style',
                'render_callback' => [ $this, 'html_output_callback']
            ] );

        }
        public function html_output_callback( $attributes) {
            ob_start();
            ?>
            <div>
            <h1>the sky colors is<?php echo $attributes['skyColor'] ;?></h1>
            </div>
            <?php
            return ob_get_clean();
        }
        /**
         * Load block editor scripts
         * first way
         */
        // public function admin_assets() {
        //     wp_enqueue_script( 'demo_block_editor', plugin_dir_url( __FILE__ ) .'assets/block.js', [ 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ], time(), true );
        // }
        /**
		 * Initializes singleton instance Stock Notifier class
		 *
		 * @return object
		 */
		public static function init() {
			static $instance = false;
			if ( ! $instance ) {
				$instance = new self();
			}
			return $instance;
		}
    }
    Gutenberg_Demo::init();
 }

