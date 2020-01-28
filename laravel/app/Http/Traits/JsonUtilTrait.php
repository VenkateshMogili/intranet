<?php

namespace App\Http\Traits;

use Illuminate\Support\Facades\Log;

trait JsonUtilTrait
{

    /**
     * @param $data
     * @param int $finalStatus
     * @return \Illuminate\Http\JsonResponse
     */
    private function jsonResponder($data, int $finalStatus = 200)
    {
        try {
            return response()->json($data, $finalStatus);

        } catch (\Throwable $e) {
            Log::error($e->getMessage());
            return response()->json(
                [
                    'message' => 'Internal server error',
                    'status' => 500,
                    'requestLocation' => request()->path(),
                    'success' => false,
                    'Results' => [],
                    'metadata' => []
                ], 500);
        }
    }

    /** Data Response *
     * @param $message
     * @param array $data
     * @param null $subStatus
     * @return \Illuminate\Http\JsonResponse
     */
    public function responseWithData($message, $data = [], $subStatus = NULL)
    {
        $response = [
            'message' => $message,
            'success' => true,
            'status' => $subStatus ?? 200,
            'requestLocation' => request()->path(),
            'results' => $data,
            'metadata' => [],
        ];
        return $this->jsonResponder($response, 200);
    }

    /** Success Response *
     */
    public function responseWithSuccess($message, $data = [], $subStatus = NULL)
    {
        $response = array(
            'message' => $message,
            'success' => true,
            'status' => $subStatus ?? 200,
            'requestLocation' => request()->path(),
            'results' => $data,
            'metadata' => array(),
        );

        return $this->jsonResponder($response, 200);
    }

    /** Error Response *
     * @param $message
     * @param array $data
     * @param null $subStatus
     * @param null $finalStatus
     * @return \Illuminate\Http\JsonResponse
     */
    public function responseWithError($message, $data = [], $subStatus = NULL, $finalStatus = NULL)
    {
        $response = array(
            'message' => $message,
            'success' => false,
            'status' => $subStatus ?? 400,
            'requestLocation' => request()->path(),
            'results' => $data,
            'metadata' => array(),
        );
        return $this->jsonResponder($response, $finalStatus ?? 200);
    }

    /** Custom Response **/
    public function responseWithCustom($message, $data, $success, $subStatus = NULL, $finalStatus = NULL)
    {
        $response = array(
            'message' => $message,
            'success' => $success,
            'status' => $subStatus ?? 200,
            'requestLocation' => request()->path(),
            'results' => $data,
            'metadata' => array(),
        );
        return $this->jsonResponder($response, $finalStatus ?? 200);
    }


}