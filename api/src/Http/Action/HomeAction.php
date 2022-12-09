<?php

declare(strict_types=1);

namespace App\Http\Action;

// use App\Http;
// use Psr\Http\Message\ResponseFactoryInterface;
use App\FeatureToggle\FeatureFlag;
use App\Http\Response\JsonResponse;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;
use stdClass;

final class HomeAction implements RequestHandlerInterface
{
    public function __construct(private readonly FeatureFlag $flag)
    {
    }

    public function handle(ServerRequestInterface $request): ResponseInterface
    {
//        $response = $this->factory->createResponse();
//        return Http::json($response, new stdClass());
        if ($this->flag->isEnabled('NEW_HOME')) {
            return new JsonResponse(['name' => 'API']);
        }
        return new JsonResponse(new stdClass());
    }
}
