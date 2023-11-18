<?php
namespace App\Http\Controllers;

use App\Menu;
use App\Models\Website\Blog\Post;
use App\Content;
use Carbon\Carbon;
use Illuminate\Http\Request;

class SitemapController extends Controller
{

    public function index(Request $request)
    {
        return response()->view('sitemap.index')->header('Content-Type', 'text/xml');
    }

    public function topMenu(Request $request, Menu $menu)
    {
        $menu = $menu->getMenu(Menu::POSITION_PRIMARY);        
        return response()->view('sitemap.menu', compact('menu'))->header('Content-Type', 'text/xml');
    }

    public function footerMenu(Request $request, Menu $menu)
    {
        $menu = $menu->getMenu(Menu::POSITION_FOOTER);        
        return response()->view('sitemap.menu', compact('menu'))->header('Content-Type', 'text/xml');
    }

    public function blog(Request $request)
    {
        $posts = Post::select(['slug', 'updated_at'])->orderBy('id', 'DESC')->get();    
        return response()->view('sitemap.blog', compact('posts'))->header('Content-Type', 'text/xml');
    }


}