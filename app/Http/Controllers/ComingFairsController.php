<?php

namespace App\Http\Controllers;

use App\Models\Fairs;
use Illuminate\Http\Request;

class ComingFairsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = Fairs::orderByRaw('id DESC')->get();
        $data->map(function ($item) {
            $item->image = url(
                sprintf('storage/%s', str_replace('\\', '/', $item->image))
            );
        });
        $data->map(function ($item) {
            $item->img_banner = url(
                sprintf('storage/%s', str_replace('\\', '/', $item->img_banner))
            );
        });
        return response()->json($data);
    }
    /**
     * Display the specified resource.
     *
     * @param  string  $slug
     * @return \Illuminate\Http\Response
     */
}
