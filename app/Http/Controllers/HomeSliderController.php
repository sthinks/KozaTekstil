<?php

namespace App\Http\Controllers;

use App\Models\Slider;
use Illuminate\Http\Request;

class HomeSliderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function getSlider()
    {
        $data = Slider::all();
        $data->map(function ($item) {
            if ($item->image) {
                $item->image = url(
                    sprintf('storage/%s', str_replace('\\', '/', $item->image))
                );
            } else {
                $result = null;
                $item->image = $result;
                return $item->image;
            }
        });
        $data->map(function ($item) {
            $video = $item->video;
            if (!empty($video)) {
                $array = json_decode($item->video, true);
                $item->video = array_map(function ($video) {
                    $video['download_link'] =
                        url('storage/') .
                        '/' .
                        str_replace('\\', '/', $video['download_link']);
                    return $video;
                }, $array);
            } else {
                $result = null;
                $item->video = $result;
                return $item->video;
            }
        });

        return response()->json($data);
    }
}
